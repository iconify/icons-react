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
		"content": `<style>.gkj6vbuly {
  d: path("M2 5a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.iqxmkybol {
  d: path("M7 10a5 5 0 1 0 10 0 5 5 0 1 0 -10 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.s_4-olb0v {
  d: path("M12 7v3h3");
}

.ui32hib9b {
  d: path("M5 20h14");
}
</style><g class="nrj6p8qat"><path class="gkj6vbuly"/><path class="ui32hib9b"/><path class="iqxmkybol"/><path class="s_4-olb0v"/></g>`,
		"fallback": "iconmind:lesson-outline-regular",
	});
}

export default Component;
