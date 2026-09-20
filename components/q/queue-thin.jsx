import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ha4h8yb3j {
  fill: currentColor;
  d: path("M36 64a4 4 0 0 1 4-4h176a4 4 0 0 1 0 8H40a4 4 0 0 1-4-4m100 60H40a4 4 0 0 0 0 8h96a4 4 0 0 0 0-8m0 64H40a4 4 0 0 0 0 8h96a4 4 0 0 0 0-8m108-28a4 4 0 0 1-1.88 3.39l-64 40a4 4 0 0 1-2.12.61a4.06 4.06 0 0 1-1.94-.5A4 4 0 0 1 172 200v-80a4 4 0 0 1 6.12-3.39l64 40A4 4 0 0 1 244 160m-11.55 0L180 127.22v65.56Z");
}
</style><path class="ha4h8yb3j"/>`,
		"fallback": "ph:queue-thin",
	});
}

export default Component;
