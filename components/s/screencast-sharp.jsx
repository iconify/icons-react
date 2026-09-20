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
		"content": `<style>.fx_mvdvmo {
  fill: currentColor;
  d: path("M2 20V4h20v16Zm12-4v-2h4v2Zm0-3v-2h4v2ZM4 11v7h16v-8h-6V8h6V6h-8v5Z");
}
</style><path class="fx_mvdvmo"/>`,
		"fallback": "material-symbols:screencast-sharp",
	});
}

export default Component;
