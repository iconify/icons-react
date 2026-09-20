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
		"content": `<style>.dgfbh6b4z {
  d: path("M12 9v9");
}

.epwe3rblo {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 9h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.h-8pk037m {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M12 9v9");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hf_gtezns {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 18h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ilenwpbkm {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m3 18 9 -9 9 9");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.j835zw5-z {
  d: path("M3 9h18");
}

.k7ro6rbzz {
  d: path("m3 18 9 -9 9 9");
}

.xyj-l9cjp {
  d: path("M3 18h18");
}
</style><g class="hntgybcog"><path class="epwe3rblo"/><path class="hf_gtezns"/><path class="ilenwpbkm"/><path class="h-8pk037m"/><path class="j835zw5-z"/><path class="xyj-l9cjp"/><path class="k7ro6rbzz"/><path class="dgfbh6b4z"/></g>`,
		"fallback": "iconmind:mesh-gen-duotone-thin",
	});
}

export default Component;
