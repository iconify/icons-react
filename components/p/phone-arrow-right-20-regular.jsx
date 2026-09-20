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
		"content": `<style>.j2xufqzft {
  fill: currentColor;
  d: path("M5.5 2A1.5 1.5 0 0 0 4 3.5v13A1.5 1.5 0 0 0 5.5 18h4.757a5.5 5.5 0 0 1-.657-1H5.5a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v5.707a5.5 5.5 0 0 1 1-.185V3.5A1.5 1.5 0 0 0 12.5 2zM9 14.5q0-.252.022-.5H7.5a.5.5 0 0 0 0 1h1.522A6 6 0 0 1 9 14.5m5.5-4.5a4.5 4.5 0 1 1 0 9a4.5 4.5 0 0 1 0-9m2.353 4.854l.003-.003a.5.5 0 0 0 .144-.348v-.006a.5.5 0 0 0-.146-.35l-2-2a.5.5 0 0 0-.708.707L15.293 14H12.5a.5.5 0 0 0 0 1h2.793l-1.147 1.146a.5.5 0 0 0 .708.708z");
}
</style><path class="j2xufqzft"/>`,
		"fallback": "fluent:phone-arrow-right-20-regular",
	});
}

export default Component;
