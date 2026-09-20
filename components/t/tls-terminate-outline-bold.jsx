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
		"content": `<style>.a2rsdhb4f {
  d: path("M12 14v3");
}

.edx-aqbqz {
  d: path("m18 20 3 -3 -3 -3");
}

.ic_pehd5a {
  d: path("M3 17h18");
}

.q-g5v7b1p {
  d: path("M7.5 5a2.5 2.5 0 0 1 5 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.yxn1e3bps {
  d: path("M6 7a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2H8a2 2 0 0 1 -2 -2Z");
}
</style><g class="s0phu2bbs"><path class="yxn1e3bps"/><path class="q-g5v7b1p"/><path class="a2rsdhb4f"/><path class="ic_pehd5a"/><path class="edx-aqbqz"/></g>`,
		"fallback": "iconmind:tls-terminate-outline-bold",
	});
}

export default Component;
