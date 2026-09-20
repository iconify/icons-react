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
		"content": `<style>.yq9917bbu {
  fill: currentColor;
  d: path("M11.5 2a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm-7-2h5.585a1.5 1.5 0 0 0 .297 1.5A1.5 1.5 0 0 0 11.5 8h3.464L10 10.92L2.015 6.223A2.5 2.5 0 0 1 4.5 4m5.754 7.931L16.934 8h.566q.264-.001.5-.085V14.5a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 2 14.5V7.373l7.747 4.558a.5.5 0 0 0 .507 0");
}
</style><path class="yq9917bbu"/>`,
		"fallback": "fluent:mail-list-20-filled",
	});
}

export default Component;
