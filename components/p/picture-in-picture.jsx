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
		"content": `<style>.v1k5nbbll {
  fill: currentColor;
  d: path("M216 48H40a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16M40 64h176v56h-80a8 8 0 0 0-8 8v64H40Zm176 128h-72v-56h72z");
}
</style><path class="v1k5nbbll"/>`,
		"fallback": "ph:picture-in-picture",
	});
}

export default Component;
