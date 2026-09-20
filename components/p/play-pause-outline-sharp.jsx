import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.kw94dslpp {
  fill: currentColor;
  d: path("M5.5 15.239V8.76L10.135 12zm8 .261v-7h1v7zm4 0v-7h1v7z");
}
</style><path class="kw94dslpp"/>`,
		"fallback": "material-symbols-light:play-pause-outline-sharp",
	});
}

export default Component;
