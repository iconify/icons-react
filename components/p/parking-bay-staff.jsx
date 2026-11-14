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
		"content": `<style>.lfp3skbzu {
  d: path("M8 15V6h3.5a3 3 0 0 1 0 6H8m8 3.75a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm-1.75 6c0-1.75 1.75-3 3.75-3s3.75 1.25 3.75 3");
}

.ta3ve8s3d {
  d: path("M12.2 19H2.5V2.5H19V11");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ta3ve8s3d"/><path class="lfp3skbzu"/></g>`,
		"fallback": "uix-sharp:parking-bay-staff",
	});
}

export default Component;
