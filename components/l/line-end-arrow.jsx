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
		"content": `<style>.t7sn1cb0u {
  fill: currentColor;
  d: path("M11 19v-6H2v-2h9V5l11 7z");
}
</style><path class="t7sn1cb0u"/>`,
		"fallback": "material-symbols:line-end-arrow",
	});
}

export default Component;
