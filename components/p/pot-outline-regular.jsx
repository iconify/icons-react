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
		"content": `<style>.fh4vasbnq {
  d: path("M8 12a4 4 0 0 1 8 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.prbp3oa5j {
  d: path("M19 15h3");
}

.us2evabuy {
  d: path("M12 5.5V8");
}

.wzsyjh0wp {
  d: path("M2 15h3");
}

.yipk7w_dp {
  d: path("M5 12v7h14v-7Z");
}
</style><g class="nrj6p8qat"><path class="yipk7w_dp"/><path class="fh4vasbnq"/><path class="us2evabuy"/><path class="wzsyjh0wp"/><path class="prbp3oa5j"/></g>`,
		"fallback": "iconmind:pot-outline-regular",
	});
}

export default Component;
