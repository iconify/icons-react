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
		"content": `<style>.f3fu1c41a {
  d: path("M4 15v-5a8 8 0 0 1 16 0v5h-4v-5a4 4 0 0 0-8 0v5Zm0-3h4m8 0h4");
}

.fqisj_44o {
  fill: currentColor;
  d: path("m6.107 18.475l.47.171a1 1 0 0 1 .598 1.282a1 1 0 0 1-1.282.597l-.47-.171a1 1 0 0 1-.598-1.282a1 1 0 0 1 1.282-.597m5.202 1.407l.066-.132a.699.699 0 0 1 1.25 0l.066.132A.773.773 0 0 1 12 21a.773.773 0 0 1-.691-1.118m6.191-1.033l.483-.13a1 1 0 0 1 1.224.707a1 1 0 0 1-.707 1.225l-.483.13a1 1 0 0 1-1.224-.707a1 1 0 0 1 .707-1.225");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="f3fu1c41a"/><path class="fqisj_44o"/></g>`,
		"fallback": "uix:magnet-separator",
	});
}

export default Component;
