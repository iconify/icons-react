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
		"content": `<style>.igy_fmblo {
  fill: currentColor;
  d: path("M12 19.577L1.423 9q2.183-1.964 4.91-2.982Q9.063 5 12 5q2.944 0 5.67 1.016Q20.393 7.03 22.576 9zM4.35 10.5q1.675-1.2 3.625-1.85T12 8t4.025.65t3.625 1.85l1.45-1.45q-1.975-1.5-4.3-2.275T12 6t-4.8.775T2.9 9.05z");
}
</style><path class="igy_fmblo"/>`,
		"fallback": "material-symbols-light:network-wifi",
	});
}

export default Component;
