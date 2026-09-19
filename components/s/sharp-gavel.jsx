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
		"content": `<style>.tpldkib_s {
  fill: currentColor;
  d: path("M1 21h12v2H1zM5.24 8.07l2.83-2.83l14.14 14.14l-2.83 2.83zM12.32 1l5.66 5.66l-2.83 2.83l-5.66-5.66zM3.83 9.48l5.66 5.66l-2.83 2.83L1 12.31z");
}
</style><path class="tpldkib_s"/>`,
		"fallback": "ic:sharp-gavel",
	});
}

export default Component;
