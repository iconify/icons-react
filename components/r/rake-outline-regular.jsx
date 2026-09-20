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
		"content": `<style>.drjad9bfe {
  d: path("M14 14v4");
}

.evsu0jbbm {
  d: path("M10 14v4");
}

.ktxjg3b2q {
  d: path("M6 14v4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.oqj-o0b2r {
  d: path("M5 14h14");
}

.qv6cnabrq {
  d: path("M12 3v11");
}

.zpusjcvvn {
  d: path("M18 14v4");
}
</style><g class="nrj6p8qat"><path class="qv6cnabrq"/><path class="oqj-o0b2r"/><path class="ktxjg3b2q"/><path class="evsu0jbbm"/><path class="drjad9bfe"/><path class="zpusjcvvn"/></g>`,
		"fallback": "iconmind:rake-outline-regular",
	});
}

export default Component;
