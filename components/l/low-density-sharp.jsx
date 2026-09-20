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
		"content": `<style>.g0gh8kv1q {
  fill: currentColor;
  d: path("M4 20v-8.615h1V19h14V5h-7.615V4H20v16zM4 8.923v-1.23h1.23v1.23zm0-3.692V4h1.23v1.23zm3.692 7.385v-1.231h1.231v1.23zm0-7.385V4h1.231v1.23zm3.692 7.385v-1.231h1.231v1.23zm0-3.693v-1.23h1.231v1.23z");
}
</style><path class="g0gh8kv1q"/>`,
		"fallback": "material-symbols-light:low-density-sharp",
	});
}

export default Component;
