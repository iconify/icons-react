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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jms1xqp8l {
  d: path("M9 3h6");
}

.nqda50bqs {
  d: path("M4 13a8 8 0 1 0 16 0 8 8 0 1 0 -16 0");
}

.pw3t53bda {
  fill: currentColor;
  d: path("M4 13a8 8 0 1 0 16 0 8 8 0 1 0 -16 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.wsg9rhonx {
  d: path("M12 8v5h4");
}

.zkgvk4bog {
  d: path("M12 2v3");
}
</style><g class="hntgybcog"><path class="pw3t53bda"/><path class="nqda50bqs"/><path class="wsg9rhonx"/><path class="jms1xqp8l"/><path class="zkgvk4bog"/></g>`,
		"fallback": "iconmind:study-timer-duotone-thin",
	});
}

export default Component;
