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
		"content": `<style>.b71kddbvq {
  d: path("M8 12L2 12M5 9L2 12L5 15M16 12L22 12M19 9L22 12L19 15");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.xvhz59bpj {
  stroke-opacity: 0.4;
  d: path("M12 5L12 19");
}
</style><g class="nrj6p8qat"><path class="xvhz59bpj"/><path class="b71kddbvq"/></g>`,
		"fallback": "keyline-icons:unfold-horizontal-two-tone",
	});
}

export default Component;
