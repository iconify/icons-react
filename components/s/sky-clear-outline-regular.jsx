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
		"content": `<style>.f2s0o7o5j {
  d: path("M7.5 9a4.5 4.5 0 1 0 9 0 4.5 4.5 0 1 0 -9 0");
}

.f59axuhhu {
  d: path("M4.5 4.5 7 7");
}

.ldfbmybql {
  d: path("M19.5 4.5 17 7");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pcl5pkbcw {
  d: path("M2 9h3");
}

.votyijv0m {
  d: path("M19 9h3");
}

.z9ittvbis {
  d: path("M2 19h20");
}
</style><g class="nrj6p8qat"><path class="f2s0o7o5j"/><path class="f59axuhhu"/><path class="ldfbmybql"/><path class="pcl5pkbcw"/><path class="votyijv0m"/><path class="z9ittvbis"/></g>`,
		"fallback": "iconmind:sky-clear-outline-regular",
	});
}

export default Component;
