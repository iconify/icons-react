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

.j835zw5-z {
  d: path("M3 9h18");
}

.k7ro6rbzz {
  d: path("m3 18 9 -9 9 9");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.xyj-l9cjp {
  d: path("M3 18h18");
}
</style><g class="nrj6p8qat"><path class="j835zw5-z"/><path class="xyj-l9cjp"/><path class="k7ro6rbzz"/><path class="dgfbh6b4z"/></g>`,
		"fallback": "iconmind:mesh-gen-outline-regular",
	});
}

export default Component;
