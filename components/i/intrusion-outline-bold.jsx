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
		"content": `<style>.f-x5yl3mg {
  d: path("M2 12h11");
}

.ftqzjnb8u {
  d: path("M6 3v18");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.u649he-6w {
  d: path("M18 3v18");
}

.vsmfi0bcq {
  d: path("m10 9 3 3 -3 3");
}
</style><g class="s0phu2bbs"><path class="ftqzjnb8u"/><path class="u649he-6w"/><path class="f-x5yl3mg"/><path class="vsmfi0bcq"/></g>`,
		"fallback": "iconmind:intrusion-outline-bold",
	});
}

export default Component;
