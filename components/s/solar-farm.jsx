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
		"content": `<style>.a-syrabih {
  d: path("M6.75 5.75h1.5m7.5 0h1.5");
}

.hi_90lb7x {
  d: path("M4.25 12.75H9q.75 0 .87.74l.51 3.27q.12.74-.63.74H3.5q-.75 0-.63-.74l.51-3.27q.12-.74.87-.74m10.75 0h4.75q.75 0 .87.74l.51 3.27q.12.74-.63.74h-6.25q-.75 0-.63-.74l.51-3.27q.12-.74.87-.74M6.75 17.5v3.75m10.5-3.75v3.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mq68zybfy {
  cx: 12px;
  cy: 5.75px;
  r: 2.5px;
}
</style><g class="hntgybcog"><path class="hi_90lb7x"/><circle class="mq68zybfy"/><path class="a-syrabih"/></g>`,
		"fallback": "iconoven:solar-farm",
	});
}

export default Component;
