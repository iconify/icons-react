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
		"content": `<style>.aq3y7ulul {
  stroke-linejoin: round;
  d: path("M7.37767 12.5556L7.37767 11.6296C7.37767 9.07276 9.46677 7 12.0438 7C13.4046 7 14.6294 7.57797 15.4823 8.5M6.00011 11L7.37767 12.5556L9.00011 11");
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pgqcfbbga {
  stroke-linejoin: round;
  d: path("M16.6188 11.4445V12.3704C16.6188 14.9273 14.5217 17 11.9349 17C10.5778 17 9.3555 16.4296 8.50006 15.5181M18.0001 12.9991L16.6188 11.4445L15.0001 12.9991");
}

.shu3xdl9q {
  cx: 12px;
  cy: 12px;
  r: 10px;
}
</style><g class="ipq1z-bjh"><path class="aq3y7ulul"/><path class="pgqcfbbga"/><circle class="shu3xdl9q"/></g>`,
		"fallback": "solar:refresh-circle-linear",
	});
}

export default Component;
