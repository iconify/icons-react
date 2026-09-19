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
		"content": `<style>.wv43qabai {
  fill: currentColor;
  d: path("M19 15.18V3h-8v16H7V8.82C8.16 8.4 9 7.3 9 6c0-1.66-1.34-3-3-3S3 4.34 3 6c0 1.3.84 2.4 2 2.82V21h8V5h4v10.18A2.996 2.996 0 0 0 18 21c1.66 0 3-1.34 3-3c0-1.3-.84-2.4-2-2.82");
}
</style><path class="wv43qabai"/>`,
		"fallback": "ic:sharp-route",
	});
}

export default Component;
