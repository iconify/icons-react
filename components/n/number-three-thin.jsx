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
		"content": `<style>.v-58opbgx {
  fill: currentColor;
  d: path("M172 160a52 52 0 0 1-86.67 38.76a4 4 0 1 1 5.34-6A44 44 0 1 0 120 116a4 4 0 0 1-3.2-6.4L160 52H88a4 4 0 0 1 0-8h80a4 4 0 0 1 3.2 6.4l-43.61 58.15A52.08 52.08 0 0 1 172 160");
}
</style><path class="v-58opbgx"/>`,
		"fallback": "ph:number-three-thin",
	});
}

export default Component;
