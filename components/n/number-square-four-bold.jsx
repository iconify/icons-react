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
		"content": `<style>.v93--7qla {
  fill: currentColor;
  d: path("M208 28H48a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20m-4 176H52V52h152ZM88 164h44v12a12 12 0 0 0 24 0v-12h4a12 12 0 0 0 0-24h-4V80a12 12 0 0 0-21.47-7.37l-56 72A12 12 0 0 0 88 164m44-49v25h-19.46Z");
}
</style><path class="v93--7qla"/>`,
		"fallback": "ph:number-square-four-bold",
	});
}

export default Component;
