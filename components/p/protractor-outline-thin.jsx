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

.ic_pehd5a {
  d: path("M3 17h18");
}

.on0zajbot {
  d: path("M7 17a5 5 0 0 1 10 0");
}

.srzgk7jml {
  d: path("M3 17a9 9 0 0 1 18 0");
}

.uzmclv6tb {
  d: path("M12 8v3");
}
</style><g class="hntgybcog"><path class="srzgk7jml"/><path class="ic_pehd5a"/><path class="on0zajbot"/><path class="uzmclv6tb"/></g>`,
		"fallback": "iconmind:protractor-outline-thin",
	});
}

export default Component;
