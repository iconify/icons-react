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
		"content": `<style>.hbdbg_bcy {
  d: path("M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v11a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.i4ag71b-h {
  d: path("m13.5 12.5 2 2");
}

.lyjarcbwz {
  d: path("M7 18v3l3 -3");
}

.mvybygobp {
  fill: currentColor;
  d: path("M7.5 10a3.5 3.5 0 1 0 7 0 3.5 3.5 0 1 0 -7 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.sqmravmye {
  fill: currentColor;
  d: path("M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v11a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.ztcfio00z {
  d: path("M7.5 10a3.5 3.5 0 1 0 7 0 3.5 3.5 0 1 0 -7 0");
}
</style><g class="hntgybcog"><path class="sqmravmye"/><path class="mvybygobp"/><path class="hbdbg_bcy"/><path class="lyjarcbwz"/><path class="ztcfio00z"/><path class="i4ag71b-h"/></g>`,
		"fallback": "iconmind:message-search-duotone-thin",
	});
}

export default Component;
