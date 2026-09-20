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
		"content": `<style>.r4z3iqbqb {
  fill: currentColor;
  d: path("M15 16.175L19.175 12L15 7.825L10.825 12zM15 19l-6-6H2v-2h7l6-6l7 7zm0-7");
}
</style><path class="r4z3iqbqb"/>`,
		"fallback": "material-symbols:line-end-diamond-outline",
	});
}

export default Component;
