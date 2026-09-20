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
		"content": `<style>.a23llpbrh {
  d: path("M4 3h4");
}

.ftqzjnb8u {
  d: path("M6 3v18");
}

.gj9xsebsr {
  d: path("m9 20 3 -3 3 3 3 -3 3 3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.s09jr7bxh {
  d: path("m9 15 3 -3 3 3 3 -3 3 3");
}

.ta7smn7pq {
  d: path("M4 9h4");
}
</style><g class="nrj6p8qat"><path class="ftqzjnb8u"/><path class="a23llpbrh"/><path class="ta7smn7pq"/><path class="s09jr7bxh"/><path class="gj9xsebsr"/></g>`,
		"fallback": "iconmind:sea-level-outline-regular",
	});
}

export default Component;
