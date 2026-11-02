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
		"content": `<style>.gd5ygyb4r {
  stroke-opacity: 0.4;
  d: path("m6 6l3 7a3.25 3.25 0 0 1-6 0Zm12 0l3 7a3.25 3.25 0 0 1-6 0Z");
}

.ht_kdnlyp {
  d: path("M12 3v18m-4 0h8M6 6h12");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="gd5ygyb4r"/><path class="ht_kdnlyp"/></g>`,
		"fallback": "coolicons:scale-duocolor-round",
	});
}

export default Component;
