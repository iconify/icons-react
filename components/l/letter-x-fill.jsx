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
		"content": `<style>.umpfuubtt {
  fill: currentColor;
  d: path("m13.179 12l4.669 7.47a1 1 0 0 1-1.696 1.06L12 13.887L7.848 20.53a1 1 0 0 1-1.696-1.06L10.821 12L6.152 4.53a1 1 0 0 1 1.696-1.06L12 10.113l4.152-6.643a.998.998 0 0 1 1.731.061a1 1 0 0 1-.035.999Z");
}
</style><path class="umpfuubtt"/>`,
		"fallback": "coolicons:letter-x-fill",
	});
}

export default Component;
