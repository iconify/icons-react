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
		"content": `<style>.z6mab2bek {
  fill: currentColor;
  d: path("m14.5 13.5l3.5-2v-4l-3.5-2l-3.5 2v4zM3.7 22.125L1.85 7.2L5 6.85V19h13.3l.125 1.325zM7 17V2h15v15z");
}
</style><path class="z6mab2bek"/>`,
		"fallback": "material-symbols:stack-hexagon-sharp",
	});
}

export default Component;
