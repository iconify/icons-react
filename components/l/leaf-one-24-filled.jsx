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
		"content": `<style>.ml9s0_bwj {
  fill: currentColor;
  d: path("M11.037 3.048a1.75 1.75 0 0 1 2.2.224l3.712 3.712A6.999 6.999 0 0 1 12.75 18.89v2.359a.75.75 0 1 1-1.5 0V18.89A6.999 6.999 0 0 1 7.051 6.984l3.712-3.712a2 2 0 0 1 .274-.224M12 11a.75.75 0 0 0-.75.75v5.63a5.5 5.5 0 0 0 1.5 0v-5.63A.75.75 0 0 0 12 11");
}
</style><path class="ml9s0_bwj"/>`,
		"fallback": "fluent:leaf-one-24-filled",
	});
}

export default Component;
