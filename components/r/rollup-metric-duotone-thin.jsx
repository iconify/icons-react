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
		"content": `<style>.gms_xv68n {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M4 4v16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kymjbvb4p {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M11 12v6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.oifr9zbpt {
  d: path("M4 20h16");
}

.ony0l-veo {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M14 15v3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.p4gh801hs {
  d: path("M8 14v4");
}

.plvacbczu {
  d: path("M18 7v11");
}

.qui36tb8q {
  d: path("M11 12v6");
}

.r3faxubne {
  d: path("M4 4v16");
}

.rr10cvv9y {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M18 7v11");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.v9zqb9bbz {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M8 14v4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ygselab1a {
  d: path("M14 15v3");
}

.yu-j7jb_g {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M4 20h16");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="gms_xv68n"/><path class="yu-j7jb_g"/><path class="v9zqb9bbz"/><path class="kymjbvb4p"/><path class="ony0l-veo"/><path class="rr10cvv9y"/><path class="r3faxubne"/><path class="oifr9zbpt"/><path class="p4gh801hs"/><path class="qui36tb8q"/><path class="ygselab1a"/><path class="plvacbczu"/></g>`,
		"fallback": "iconmind:rollup-metric-duotone-thin",
	});
}

export default Component;
