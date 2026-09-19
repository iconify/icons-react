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
		"content": `<style>.t5oz71bwl {
  fill: currentColor;
  d: path("M22 4H2v16h20zM4 12h4v2H4zm10 6H4v-2h10zm6 0h-4v-2h4zm0-4H10v-2h10z");
}
</style><path class="t5oz71bwl"/>`,
		"fallback": "ic:sharp-subtitles",
	});
}

export default Component;
