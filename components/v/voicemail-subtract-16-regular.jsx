import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.dlc_1-98o {
  fill: currentColor;
  d: path("M6.332 5A1.75 1.75 0 1 1 4.75 4h4.5a1.75 1.75 0 0 1 1.586 1.01a5.6 5.6 0 0 0-1.256.067a.75.75 0 0 0-.948.248a5.5 5.5 0 0 0-1.127.561A1.8 1.8 0 0 1 7.668 5zM4 5.75a.75.75 0 1 0 1.5 0a.75.75 0 0 0-1.5 0m8-3.25v2.707q.524.149 1 .393V2.5A1.5 1.5 0 0 0 11.5 1h-9A1.5 1.5 0 0 0 1 2.5V9a1.5 1.5 0 0 0 1.5 1.5H5q0-.513.09-1H2.5A.5.5 0 0 1 2 9V2.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5m3 8a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-2 0a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0 0 1h4a.5.5 0 0 0 .5-.5");
}
</style><path class="dlc_1-98o"/>`,
		"fallback": "fluent:voicemail-subtract-16-regular",
	});
}

export default Component;
