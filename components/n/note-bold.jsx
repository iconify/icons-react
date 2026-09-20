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
		"content": `<style>.ne_q_pb3t {
  fill: currentColor;
  d: path("M84 108a12 12 0 0 1 12-12h64a12 12 0 0 1 0 24H96a12 12 0 0 1-12-12m32 28H96a12 12 0 0 0 0 24h20a12 12 0 0 0 0-24m112-88v108.69a19.86 19.86 0 0 1-5.86 14.14l-51.31 51.31a19.86 19.86 0 0 1-14.14 5.86H48a20 20 0 0 1-20-20V48a20 20 0 0 1 20-20h160a20 20 0 0 1 20 20M52 204h92v-48a12 12 0 0 1 12-12h48V52H52Zm139-36h-23v23Z");
}
</style><path class="ne_q_pb3t"/>`,
		"fallback": "ph:note-bold",
	});
}

export default Component;
