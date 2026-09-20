import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.jd_8jwb_g {
  fill: var(--svg-color--40c0e7, #40c0e7);
  d: path("M106 112.5v-97L22 64z");
}
</style><path class="jd_8jwb_g"/>`,
		"fallback": "noto-v1:reverse-button",
	});
}

export default Component;
