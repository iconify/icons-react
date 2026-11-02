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
		"content": `<style>.j6md32idz {
  stroke-opacity: 0.4;
  d: path("M12 6h7v4m-4-7l-3 3l3 3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.v_vtf3bnh {
  d: path("M19 14v6H5V6h3");
}
</style><g class="nrj6p8qat"><path class="j6md32idz"/><path class="v_vtf3bnh"/></g>`,
		"fallback": "coolicons:rotate-left-duocolor-sharp",
	});
}

export default Component;
