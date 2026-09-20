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
		"content": `<style>.c0568tw_e {
  fill: currentColor;
  d: path("m16.9 20.5l-1.4-1.4l2.1-2.1l-2.1-2.1l1.4-1.4l2.1 2.1l2.1-2.1l1.425 1.4l-2.1 2.1l2.075 2.1l-1.4 1.4l-2.1-2.075zM12 21L0 9q2.375-2.425 5.488-3.713T12 4t6.513 1.288T24 9l-3.45 3.425q-.35-.35-.7-.712t-.7-.713l1.95-1.95q-1.975-1.5-4.3-2.275T12 6t-4.8.775T2.9 9.05l9.1 9.1l1-1l.713.713l.712.712zm0-8.925");
}
</style><path class="c0568tw_e"/>`,
		"fallback": "material-symbols:signal-wifi-bad-outline",
	});
}

export default Component;
