import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.hy4vtac6v {
  fill: currentColor;
  d: path("M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16M6.5 8.5a3.5 3.5 0 1 1 5.587 2.81c-.183.136-.284.289-.31.43l-.05.26H8.273l-.05-.26c-.026-.141-.127-.294-.31-.43A3.5 3.5 0 0 1 6.5 8.5m2.182 5.684L8.46 13h3.08l-.222 1.184a1 1 0 0 1-.983.816h-.67a1 1 0 0 1-.983-.816");
}
</style><path class="hy4vtac6v"/>`,
		"fallback": "fluent:lightbulb-circle-20-filled",
	});
}

export default Component;
