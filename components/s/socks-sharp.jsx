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
		"content": `<style>.vb2_6zbjz {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M15.019 7.05V3H21.001V7.05M15.019 7.05V12.12L12.132 15.64C10.98 17.05 11.188 19.14 12.594 20.28C13.946 21.38 15.913 21.2 17.04 19.86L21.001 15.16V7.05M15.019 7.05H21.001M12.03 3H6.543V7.05M6.543 7.05V12.12L3.756 15.52C2.561 16.98 2.811 19.16 4.305 20.3C5.09 20.9 6.1 21.1 7.052 20.86L8.294 20.54M6.543 7.05H12.03");
}
</style><path class="vb2_6zbjz"/>`,
		"fallback": "keyline-icons:socks-sharp",
	});
}

export default Component;
