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
		"content": `<style>.cukfasbys {
  stroke-opacity: 0.4;
  d: path("M14 17L21 17L21 3L7 3L7 10");
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.sak91fb9h {
  d: path("M11.2929 12.7071L3.1464 20.8536M12 21L3 21L3 12");
}
</style><g class="gp_8x1bzb"><path class="cukfasbys"/><path class="sak91fb9h"/></g>`,
		"fallback": "keyline-icons:square-arrow-out-down-left-sharp-two-tone",
	});
}

export default Component;
