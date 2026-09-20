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
		"content": `<style>.ejc7sbawl {
  d: path("M20 15v4");
}

.hb39b-bug {
  d: path("M12 3v16");
}

.lqktbo2ou {
  d: path("M16 12v7");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ul-6megvv {
  d: path("M8 11v8");
}

.vezho9b5g {
  d: path("M4 14v5");
}

.z9ittvbis {
  d: path("M2 19h20");
}
</style><g class="nrj6p8qat"><path class="vezho9b5g"/><path class="ul-6megvv"/><path class="hb39b-bug"/><path class="lqktbo2ou"/><path class="ejc7sbawl"/><path class="z9ittvbis"/></g>`,
		"fallback": "iconmind:volume-anomaly-outline-regular",
	});
}

export default Component;
