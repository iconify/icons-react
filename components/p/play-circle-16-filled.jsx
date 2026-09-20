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
		"content": `<style>.vep-8_bel {
  fill: currentColor;
  d: path("M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1m-.872 4.602A.75.75 0 0 0 6 6.249v3.502a.75.75 0 0 0 1.128.647l3-1.75a.75.75 0 0 0 0-1.295z");
}
</style><path class="vep-8_bel"/>`,
		"fallback": "fluent:play-circle-16-filled",
	});
}

export default Component;
