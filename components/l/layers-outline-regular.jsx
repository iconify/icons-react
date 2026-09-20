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
		"content": `<style>.cdily2n9h {
  d: path("m4 13 8 8 8 -8");
}

.kw9oa7xce {
  d: path("m4 4 8 8 8 -8");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.xm7-1nb3t {
  d: path("m4 8.5 8 8 8 -8");
}
</style><g class="nrj6p8qat"><path class="kw9oa7xce"/><path class="xm7-1nb3t"/><path class="cdily2n9h"/></g>`,
		"fallback": "iconmind:layers-outline-regular",
	});
}

export default Component;
