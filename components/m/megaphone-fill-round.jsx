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
		"content": `<style>.ig5b-xtid {
  fill: currentColor;
  d: path("M10 15v4a3 3 0 1 1-6 0v-4.535A4.001 4.001 0 0 1 6 7h4.764l5.789-2.894c1.12-.56 2.457-.597 3.583-.034c.534.267.996.658 1.328 1.154C21.816 5.753 22 6.367 22 7v8c0 .633-.184 1.247-.536 1.774a3.44 3.44 0 0 1-1.328 1.154c-1.126.563-2.463.526-3.583-.034L10.764 15Zm0-2V9H6a2 2 0 1 0 0 4Zm-4 6a1 1 0 0 0 2 0v-4H6Z");
}
</style><path class="ig5b-xtid"/>`,
		"fallback": "coolicons:megaphone-fill-round",
	});
}

export default Component;
