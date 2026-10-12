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
		"content": `<style>.h81zrmtfz {
  width: 15.5px;
  height: 18.5px;
  x: 4.25px;
  y: 2.75px;
  rx: 2.5px;
}

.hcr7wigqs {
  d: path("M12.75 13.25v-3.5a3.5 3.5 0 0 1 3.5 3.5Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nl9nuxcnn {
  d: path("M8.5 6.25h7M12 9.75A4.25 4.25 0 1 0 16.25 14");
}
</style><g class="hntgybcog"><rect class="h81zrmtfz"/><path class="nl9nuxcnn"/><path class="hcr7wigqs"/></g>`,
		"fallback": "iconoven:quarterly-report",
	});
}

export default Component;
