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
		"content": `<style>.moq6i-b5v {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 12.75v4.5m5-4.5v4.5m-4 4v-4.5h3v4.5");
}

.n2802jk1h {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5.25 14h.01m-.01 4h.01m13.49-4h.01m-.01 4h.01M12 9h.01");
}

.tphqf3bwc {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 20.65V11.5l.39-.46l.72-.83l.39-.46H7.5l.42-.42l3.66-3.66l.42-.42l.42.42l3.66 3.66l.42.42h3.25l.39.46l.72.83l.39.46v9.75H2.75z");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="tphqf3bwc"/><path class="n2802jk1h"/><path class="moq6i-b5v"/></g>`,
		"fallback": "iconoven:mansion-sharp",
	});
}

export default Component;
