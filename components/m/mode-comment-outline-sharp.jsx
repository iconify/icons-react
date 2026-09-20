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
		"content": `<style>.e76uccbpf {
  fill: currentColor;
  d: path("M3 17V3h18v17.077L17.923 17zm1-1h14.35L20 17.644V4H4zm0 0V4z");
}
</style><path class="e76uccbpf"/>`,
		"fallback": "material-symbols-light:mode-comment-outline-sharp",
	});
}

export default Component;
