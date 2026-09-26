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
		"content": `<style>.xra4d6b9e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5.05837 18.2211L11.5195 5.29703C11.7175 4.90099 12.2825 4.90099 12.4805 5.29704L18.9416 18.2211C19.1557 18.6493 18.7453 19.1225 18.2912 18.9712L12.1699 16.9304C12.0596 16.8937 11.9404 16.8937 11.8301 16.9304L5.70882 18.9712C5.25473 19.1225 4.84432 18.6493 5.05837 18.2211Z");
}
</style><path class="xra4d6b9e"/>`,
		"fallback": "keyline-icons:navigation",
	});
}

export default Component;
