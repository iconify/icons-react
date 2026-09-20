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
		"content": `<style>.ilk2gccex {
  d: path("M7 8v4");
}

.k2ge1hzsr {
  d: path("M15 15v4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qqj79abfc {
  d: path("M13 19v3h4v-3");
}

.v35i90uku {
  d: path("M5 12v3h4v-3");
}

.ywch90sba {
  d: path("m3 4 16 16");
}
</style><g class="nrj6p8qat"><path class="ywch90sba"/><path class="ilk2gccex"/><path class="v35i90uku"/><path class="k2ge1hzsr"/><path class="qqj79abfc"/></g>`,
		"fallback": "iconmind:ski-lift-outline-regular",
	});
}

export default Component;
