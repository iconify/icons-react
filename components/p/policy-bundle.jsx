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
		"content": `<style>.gidqtmqvi {
  d: path("M14.25 5.5V2.75h6.5V11");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.iak6kzsia {
  d: path("M8.75 11V8.25h6.5V11");
}

.kdt9upb8j {
  d: path("M2.5 9.5H7L8.5 11h13v8.5A1.5 1.5 0 0 1 20 21H4a1.5 1.5 0 0 1-1.5-1.5Z");
}

.zr0ufwb4n {
  d: path("M11.5 8.25V5.5H18V11");
}
</style><g class="hntgybcog"><path class="kdt9upb8j"/><path class="iak6kzsia"/><path class="zr0ufwb4n"/><path class="gidqtmqvi"/></g>`,
		"fallback": "uix:policy-bundle",
	});
}

export default Component;
