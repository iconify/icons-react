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
		"content": `<style>.bt0m_-6hc {
  d: path("m12 11 5 5 -5 5Z");
}

.nihsamj-p {
  fill: currentColor;
  d: path("m12 11 5 5 -5 5Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.skbifdbcx {
  d: path("M8.69 3.37a4 4 0 1 1 -3.38 0");
}
</style><g class="nrj6p8qat"><path class="nihsamj-p"/><path class="skbifdbcx"/><path class="bt0m_-6hc"/></g>`,
		"fallback": "iconmind:test-agent-duotone-regular",
	});
}

export default Component;
