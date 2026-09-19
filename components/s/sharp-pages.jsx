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
		"content": `<style>.l5xvid--c {
  fill: currentColor;
  d: path("M3 3v8h5L7 7l4 1V3zm5 10H3v8h8v-5l-4 1zm9 4l-4-1v5h8v-8h-5zm4-14h-8v5l4-1l-1 4h5z");
}
</style><path class="l5xvid--c"/>`,
		"fallback": "ic:sharp-pages",
	});
}

export default Component;
