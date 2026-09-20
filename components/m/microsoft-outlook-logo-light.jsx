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
		"content": `<style>.oqbt4x_rl {
  fill: currentColor;
  d: path("M118 128a30 30 0 1 0-30 30a30 30 0 0 0 30-30m-48 0a18 18 0 1 1 18 18a18 18 0 0 1-18-18m154-22h-18V40a6 6 0 0 0-6-6h-96a6 6 0 0 0-6 6v26H40a14 14 0 0 0-14 14v96a14 14 0 0 0 14 14h34v18a14 14 0 0 0 14 14h128a14 14 0 0 0 14-14v-96a6 6 0 0 0-6-6m-61.75 58L218 123.73v80.54ZM110 46h84v80.27l-42 30.33l-2-1.45V80a14 14 0 0 0-14-14h-26ZM38 176V80a2 2 0 0 1 2-2h96a2 2 0 0 1 2 2v96a2 2 0 0 1-2 2H40a2 2 0 0 1-2-2m48 32v-18h50a14 14 0 0 0 14-14v-6l55.44 40H88a2 2 0 0 1-2-2");
}
</style><path class="oqbt4x_rl"/>`,
		"fallback": "ph:microsoft-outlook-logo-light",
	});
}

export default Component;
