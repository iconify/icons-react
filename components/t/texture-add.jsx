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
		"content": `<style>.d-a2fbkyy {
  fill: currentColor;
  d: path("M4.4 21q-.475-.1-.888-.513T3 19.6L19.6 3q.525.125.9.513t.525.887zM3 14.7v-2.8L11.9 3h2.8zM3 7V5q0-.825.588-1.413T5 3h2zm18 2.3v2.8l-.475.475q-.5-.25-1.062-.387T18.3 12zM9.3 21l2.7-2.7q.05.6.188 1.163t.387 1.062L12.1 21zm7.7-2h-3v-2h3v-3h2v3h3v2h-3v3h-2z");
}
</style><path class="d-a2fbkyy"/>`,
		"fallback": "material-symbols:texture-add",
	});
}

export default Component;
