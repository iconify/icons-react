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
		"content": `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.r182r524c {
  d: path("M7 9h10");
}

.r8vbx7bdh {
  d: path("M5 9a7 7 0 1 0 14 0A7 7 0 1 0 5 9");
}

.z475fobui {
  d: path("M12 16v6");
}
</style><g class="nrj6p8qat"><path class="r8vbx7bdh"/><path class="z475fobui"/><path class="r182r524c"/></g>`,
		"fallback": "iconmind:road-closed-outline-regular",
	});
}

export default Component;
