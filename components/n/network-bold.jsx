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
		"content": `<style>.z9wcb---h {
  fill: currentColor;
  d: path("M232 108h-92V92h4a20 20 0 0 0 20-20V40a20 20 0 0 0-20-20h-32a20 20 0 0 0-20 20v32a20 20 0 0 0 20 20h4v16H24a12 12 0 0 0 0 24h28v24h-4a20 20 0 0 0-20 20v32a20 20 0 0 0 20 20h32a20 20 0 0 0 20-20v-32a20 20 0 0 0-20-20h-4v-24h104v24h-4a20 20 0 0 0-20 20v32a20 20 0 0 0 20 20h32a20 20 0 0 0 20-20v-32a20 20 0 0 0-20-20h-4v-24h28a12 12 0 0 0 0-24M116 44h24v24h-24ZM76 204H52v-24h24Zm128 0h-24v-24h24Z");
}
</style><path class="z9wcb---h"/>`,
		"fallback": "ph:network-bold",
	});
}

export default Component;
