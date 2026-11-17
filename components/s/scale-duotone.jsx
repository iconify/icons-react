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
		"content": `<style>.awpzzfbhl {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m6 6l3 7a3.25 3.25 0 0 1-6 0Zm12 0l3 7a3.25 3.25 0 0 1-6 0Z");
}

.ft5dv1b6b {
  fill: none;
}

.rf5dn__pe {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 3v18m-4 0h8M6 6h12M6 6l3 7a3.25 3.25 0 0 1-6 0Zm12 0l3 7a3.25 3.25 0 0 1-6 0Z");
}
</style><g class="ft5dv1b6b"><path class="awpzzfbhl"/><path class="rf5dn__pe"/></g>`,
		"fallback": "coolicons:scale-duotone",
	});
}

export default Component;
