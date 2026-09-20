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
		"content": `<style>.v_wo39bgj {
  fill: currentColor;
  d: path("M1 18.77v-1h3.616V17H3V5h18v12h-1.616v.77H23v1z");
}
</style><path class="v_wo39bgj"/>`,
		"fallback": "material-symbols-light:laptop-windows-sharp",
	});
}

export default Component;
