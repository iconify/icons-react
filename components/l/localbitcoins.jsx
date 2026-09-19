import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.dm3n_zbqz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.2 25.988L24 43.504l11.733-17.7m-10.858-7.288a2.692 2.692 0 0 1 0 5.383h-4.442V13.133h4.442a2.692 2.692 0 1 1 0 5.383m0 0h-4.44m2.855 5.438v1.355m0-13.65v1.416");
}

.hu7-8od_j {
  fill: none;
  stroke: currentColor;
  stroke-dasharray: 3.969 3.969;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M37.864 18.405a13.9 13.9 0 0 1-13.9 13.9c-18.44-.731-18.435-27.072 0-27.801a13.9 13.9 0 0 1 13.9 13.9");
}
</style><path class="dm3n_zbqz"/><path class="hu7-8od_j"/>`,
		"fallback": "arcticons:localbitcoins",
	});
}

export default Component;
