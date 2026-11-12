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
		"content": `<style>.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jy2u6qbys {
  d: path("M12 4L12 20");
}

.k2-30wbbi {
  d: path("M4 11L4 13");
}

.pz2mgtkjp {
  d: path("M20 11L20 13");
}

.raaf8s_fa {
  d: path("M16 7L16 9M16 13L16 17");
}

.v_l5o-b7n {
  d: path("M8 17L8 15M8 11L8 7");
}
</style><g class="ipq1z-bjh"><path class="jy2u6qbys"/><path class="raaf8s_fa"/><path class="v_l5o-b7n"/><path class="pz2mgtkjp"/><path class="k2-30wbbi"/></g>`,
		"fallback": "solar:soundwave-broken",
	});
}

export default Component;
