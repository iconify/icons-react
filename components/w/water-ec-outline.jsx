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
		"content": `<style>.lcjapxbid {
  fill: currentColor;
  d: path("M11.5 17.5h.23l2.943-5.192H12.5V8.5h-.23l-2.943 5.192H11.5zm-4.501 1.437Q5 16.873 5 13.8q0-2.154 1.738-4.765T12 3.308q3.525 3.117 5.262 5.728Q19 11.646 19 13.8q0 3.073-2.002 5.137Q14.994 21 11.996 21t-4.998-2.064m9.301-.698Q18 16.475 18 13.8q0-1.825-1.513-4.125T12 4.65Q9.025 7.375 7.513 9.675T6 13.8q0 2.675 1.7 4.438T12 20t4.3-1.763M12 12.155");
}
</style><path class="lcjapxbid"/>`,
		"fallback": "material-symbols-light:water-ec-outline",
	});
}

export default Component;
