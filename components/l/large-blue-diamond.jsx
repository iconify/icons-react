import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.l_hpaob5j {
  fill: var(--svg-color--03a9f4, #03a9f4);
  d: path("M64 126.82c-.78 0-1.55-.3-2.14-.89L2.07 66.15c-.57-.57-.89-1.34-.89-2.15c0-.8.32-1.58.89-2.14l59.79-59.8c.57-.56 1.34-.88 2.14-.88s1.58.32 2.15.89l59.79 59.79a3.04 3.04 0 0 1 0 4.29l-59.79 59.79c-.6.58-1.37.88-2.15.88");
}
</style><path class="l_hpaob5j"/>`,
		"fallback": "noto-v1:large-blue-diamond",
	});
}

export default Component;
