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
		"content": `<style>.p26pxccep {
  fill: currentColor;
  d: path("M2.5 19.385v-1h19v1zm2.346-3.77v-7h1v7zm3.77 0v-11h1v11zm3.769 0v-11h1v11zm6.307 0l-3.5-6.115l.866-.5l3.5 6.116z");
}
</style><path class="p26pxccep"/>`,
		"fallback": "material-symbols-light:newsstand-sharp",
	});
}

export default Component;
