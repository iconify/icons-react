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
		"content": `<style>.ks7q7xi3u {
  fill: currentColor;
  d: path("M4 4h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2m11 1.5H4a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-.5-.5M4.563 16A2 2 0 0 0 6.5 17.5h9a4 4 0 0 0 4-4v-5A2 2 0 0 0 18 6.563V13.5a2.5 2.5 0 0 1-2.5 2.5zm2.5 2.5A2 2 0 0 0 9 20h7.25A5.75 5.75 0 0 0 22 14.25V11a2 2 0 0 0-1.5-1.937v5.187a4.25 4.25 0 0 1-4.25 4.25z");
}
</style><path class="ks7q7xi3u"/>`,
		"fallback": "fluent:stack-24-regular",
	});
}

export default Component;
