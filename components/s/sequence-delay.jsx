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
		"content": `<style>.aid49ffvi {
  d: path("M2.5 2.5H12V6H2.5Zm10.2 9.75H5v-3.5h9.5v3.2m-1.8 6.55H7.5V15h5.2m2.8-.25h5m-5 6.5h5m-4-6.5v1l3 4.5v1");
}

.sbezkcbzn {
  d: path("M19.5 14.75v1l-3 4.5v1");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="aid49ffvi"/><path class="sbezkcbzn"/></g>`,
		"fallback": "uix-sharp:sequence-delay",
	});
}

export default Component;
