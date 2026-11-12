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
		"content": `<style>.c5cjgzbpf {
  d: path("M18.2168 18.2178L21.9994 22.0004");
}

.hllyxzboc {
  cx: 11.5px;
  cy: 11.5px;
  r: 9.5px;
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.olanaab7u {
  d: path("M9.73242 13.2675L11.5002 11.4997L13.268 9.73192");
}
</style><g class="ipq1z-bjh"><circle class="hllyxzboc"/><path class="olanaab7u"/><path class="c5cjgzbpf"/></g>`,
		"fallback": "solar:magnifier-slash-linear",
	});
}

export default Component;
