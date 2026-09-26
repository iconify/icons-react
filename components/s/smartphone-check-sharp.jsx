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
		"content": `<style>.dk6tewbjv {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M19 13L19 2L5 2L5 22L10 22M12.7055 19.2971L15.3333 22L19.1467 15.76M14.5 6L9.5 6");
}
</style><path class="dk6tewbjv"/>`,
		"fallback": "keyline-icons:smartphone-check-sharp",
	});
}

export default Component;
