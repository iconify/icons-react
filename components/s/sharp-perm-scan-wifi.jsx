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
		"content": `<style>.xoqkg3b8b {
  fill: currentColor;
  d: path("M12 3C6.95 3 3.15 4.85 0 7.23L12 22L24 7.25C20.85 4.87 17.05 3 12 3m1 13h-2v-6h2zm-2-8V6h2v2z");
}
</style><path class="xoqkg3b8b"/>`,
		"fallback": "ic:sharp-perm-scan-wifi",
	});
}

export default Component;
