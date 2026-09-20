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
		"content": `<style>.bj2hlhbfp {
  d: path("M3 12h12");
}

.ic_pehd5a {
  d: path("M3 17h18");
}

.k0l21tbkp {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M3 12h12");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.k6t30nbxd {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M3 7h6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.kr5tlbbsn {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M3 17h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.xrnoeq00r {
  d: path("M3 7h6");
}
</style><g class="s0phu2bbs"><path class="k6t30nbxd"/><path class="k0l21tbkp"/><path class="kr5tlbbsn"/><path class="xrnoeq00r"/><path class="bj2hlhbfp"/><path class="ic_pehd5a"/></g>`,
		"fallback": "iconmind:rollout-duotone-bold",
	});
}

export default Component;
