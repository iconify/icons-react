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
		"content": `<style>.um9vcebtj {
  fill: currentColor;
  d: path("m3 3.707l-.854-.853a.5.5 0 1 1 .708-.708l15 15a.5.5 0 0 1-.708.708l-.449-.45A1.5 1.5 0 0 1 15.5 18h-2a1.5 1.5 0 0 1-1.5-1.5v-3.793l-4-4V16.5A1.5 1.5 0 0 1 6.5 18h-2A1.5 1.5 0 0 1 3 16.5zm4 4l-3-3V16.5a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5zm6 6V16.5a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .468-.325zM7 3.5v1.379l1 1V3.5A1.5 1.5 0 0 0 6.5 2h-2q-.175 0-.34.039L5.121 3H6.5a.5.5 0 0 1 .5.5m5 6.379l1 1V3.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v10.379l1 1V3.5A1.5 1.5 0 0 0 15.5 2h-2A1.5 1.5 0 0 0 12 3.5z");
}
</style><path class="um9vcebtj"/>`,
		"fallback": "fluent:pause-off-20-regular",
	});
}

export default Component;
