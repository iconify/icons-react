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
		"content": `<style>.rdsi0rwka {
  fill: currentColor;
  d: path("M4 20V8.692l11.23-4.326V13h1.693q0-.635.452-1.086q.451-.453 1.085-.453t1.087.452T20 13v7zm1-1h5v-6h4.23V5.804L5 9.375zm6 0h3.23v-2.308h1.54V19H19v-5h-8zm4-.654");
}
</style><path class="rdsi0rwka"/>`,
		"fallback": "material-symbols-light:villa-outline-sharp",
	});
}

export default Component;
