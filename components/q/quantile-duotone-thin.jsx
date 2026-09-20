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
		"content": `<style>.axb7g-bsx {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m6 17 3 -3 3 -3 3 3 3 3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.gms_xv68n {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M4 4v16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.gn27qsbvp {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M9 8v10");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mmi5hvbvz {
  d: path("M9 8v10");
}

.oifr9zbpt {
  d: path("M4 20h16");
}

.r3faxubne {
  d: path("M4 4v16");
}

.xmro9gb_f {
  d: path("M15 8v10");
}

.yapupmb7z {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M15 8v10");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.yu-j7jb_g {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M4 20h16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.z29yzbtbb {
  d: path("m6 17 3 -3 3 -3 3 3 3 3");
}
</style><g class="hntgybcog"><path class="gms_xv68n"/><path class="yu-j7jb_g"/><path class="axb7g-bsx"/><path class="gn27qsbvp"/><path class="yapupmb7z"/><path class="r3faxubne"/><path class="oifr9zbpt"/><path class="z29yzbtbb"/><path class="mmi5hvbvz"/><path class="xmro9gb_f"/></g>`,
		"fallback": "iconmind:quantile-duotone-thin",
	});
}

export default Component;
