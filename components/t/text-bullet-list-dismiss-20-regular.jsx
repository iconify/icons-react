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
		"content": `<style>.i68ao3bjp {
  fill: currentColor;
  d: path("M3 5.5a1 1 0 1 0 0-2a1 1 0 0 0 0 2m3-1a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0 5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m4.022 5.5q.047-.516.185-1H6.5a.5.5 0 0 0 0 1zM4 14.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-1-4a1 1 0 1 0 0-2a1 1 0 0 0 0 2m17 5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-3.793 0l1.147-1.146a.5.5 0 0 0-.708-.708L15.5 14.793l-1.146-1.147a.5.5 0 0 0-.708.708l1.147 1.146l-1.147 1.146a.5.5 0 0 0 .708.708l1.146-1.147l1.146 1.147a.5.5 0 0 0 .708-.708z");
}
</style><path class="i68ao3bjp"/>`,
		"fallback": "fluent:text-bullet-list-dismiss-20-regular",
	});
}

export default Component;
