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
		"content": `<style>.l0z5s7moi {
  fill: currentColor;
  d: path("M100 36H56a20 20 0 0 0-20 20v44a20 20 0 0 0 20 20h44a20 20 0 0 0 20-20V56a20 20 0 0 0-20-20m-4 60H60V60h36Zm4 40H56a20 20 0 0 0-20 20v44a20 20 0 0 0 20 20h44a20 20 0 0 0 20-20v-44a20 20 0 0 0-20-20m-4 60H60v-36h36ZM200 36h-44a20 20 0 0 0-20 20v44a20 20 0 0 0 20 20h44a20 20 0 0 0 20-20V56a20 20 0 0 0-20-20m-4 60h-36V60h36Zm-60 76v-24a12 12 0 0 1 24 0v24a12 12 0 0 1-24 0m84-8a12 12 0 0 1-12 12h-12v32a12 12 0 0 1-12 12h-36a12 12 0 0 1 0-24h24v-48a12 12 0 0 1 24 0v4h12a12 12 0 0 1 12 12");
}
</style><path class="l0z5s7moi"/>`,
		"fallback": "ph:qr-code-bold",
	});
}

export default Component;
