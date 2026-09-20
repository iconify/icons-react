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
		"content": `<style>.h37w9gjhe {
  fill: currentColor;
  d: path("M243.75 48.4A14 14 0 0 0 232 42H88.81A14 14 0 0 0 76 50.25l-64.8 144A14 14 0 0 0 24 214h143.19a14 14 0 0 0 12.81-8.25l64.8-144a14 14 0 0 0-1.05-13.35m-9.93 8.42l-64.8 144a2 2 0 0 1-1.83 1.18H24a2 2 0 0 1-1.83-2.82L87 55.18A2 2 0 0 1 88.81 54H232a2 2 0 0 1 1.83 2.82Z");
}
</style><path class="h37w9gjhe"/>`,
		"fallback": "ph:parallelogram-light",
	});
}

export default Component;
