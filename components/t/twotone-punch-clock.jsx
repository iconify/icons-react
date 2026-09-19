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
		"content": `<style>.c017-acuz {
  fill: currentColor;
  d: path("m13.85 15.14l-1.35-1.35V11.5h-1v2.71l1.64 1.64z");
}

.shutdsxyx {
  fill: currentColor;
  d: path("M19 6h-1V1H6v5H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2M8 3h8v3H8zm11 17H5V8h14z");
}

.u7cvfs4re {
  fill: currentColor;
  d: path("M8 3h8v3H8zM5 20h14V8H5zm7-11c2.76 0 5 2.24 5 5s-2.24 5-5 5s-5-2.24-5-5s2.24-5 5-5");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.uddaamz9l {
  fill: currentColor;
  d: path("M12 19c2.76 0 5-2.24 5-5s-2.24-5-5-5s-5 2.24-5 5s2.24 5 5 5m0-8.5c1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5s-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5");
}
</style><path class="u7cvfs4re"/><path class="shutdsxyx"/><path class="uddaamz9l"/><path class="c017-acuz"/>`,
		"fallback": "ic:twotone-punch-clock",
	});
}

export default Component;
