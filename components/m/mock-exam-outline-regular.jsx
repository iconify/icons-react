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
		"content": `<style>.eyyyeghth {
  d: path("M4 3h16v18H4Z");
}

.ivxatgkif {
  d: path("m19 15 -6 6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.r_4k1sbsg {
  d: path("M7 13h6");
}

.r182r524c {
  d: path("M7 9h10");
}

.zwgz_-bzc {
  d: path("m13 15 6 6");
}
</style><g class="nrj6p8qat"><path class="eyyyeghth"/><path class="r182r524c"/><path class="r_4k1sbsg"/><path class="zwgz_-bzc"/><path class="ivxatgkif"/></g>`,
		"fallback": "iconmind:mock-exam-outline-regular",
	});
}

export default Component;
