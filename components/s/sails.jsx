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
		"content": `<style>.a30p66bsm {
  fill: var(--svg-color--28a3b2, #28a3b2);
  d: path("M24.34 255.334S-73.092 100.291 127.341.457v254.877zm134.033 0V97.36s31.99 52.206 97.003 157.975z");
}
</style><path class="a30p66bsm"/>`,
		"fallback": "logos:sails",
	});
}

export default Component;
