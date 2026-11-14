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
		"content": `<style>.q7ifl8bni {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 9.5V21m19-11.5V21m-19-9.5C6 19 18 19 21.5 11.5m-19 0h19m-15 0l2.25 4.75M12 11.5v5.75m5.5-5.75l-2.25 4.75M9.25 5a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0M12 4.25v1.5");
}
</style><path class="q7ifl8bni"/>`,
		"fallback": "uix:social-security-contribution",
	});
}

export default Component;
