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
		"content": `<style>.lv2fqxnsv {
  fill: currentColor;
  d: path("m17.1 14.35l-1.45-1.45q.225-.275.738-1t.637-1l-2.85-2.875L15.1 3H21v1.05q0 2.725-.975 5.3t-2.925 5M4.05 21H3v-5.875L8 14.1l2.9 2.9q.725-.45 1.138-.737t.762-.563L1.4 4.3l1.4-1.4l18.4 18.4l-1.4 1.4l-5.55-5.55q-2.3 1.875-4.925 2.863T4.05 21");
}
</style><path class="lv2fqxnsv"/>`,
		"fallback": "material-symbols:phone-disabled-sharp",
	});
}

export default Component;
