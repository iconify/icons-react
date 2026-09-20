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
		"content": `<style>.ibqwgrb_h {
  fill: currentColor;
  d: path("M6 22v-4.3q-1.425-1.3-2.212-3.037T3 11q0-3.75 2.625-6.375T12 2q3.125 0 5.538 1.838t3.137 4.787l1.3 5.125q.125.475-.175.863T21 15h-2v3q0 .825-.587 1.413T17 20h-2v2zm5-8h2V7h-2zm3-1.5h2V8h-2zM8 12h2V8H8z");
}
</style><path class="ibqwgrb_h"/>`,
		"fallback": "material-symbols:mindfulness",
	});
}

export default Component;
