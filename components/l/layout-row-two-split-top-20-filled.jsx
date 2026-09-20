import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.sgs5swrgw {
  fill: currentColor;
  d: path("M9.5 9.5V3H6a3 3 0 0 0-3 3v3.5zm1 0H17V6a3 3 0 0 0-3-3h-3.5zm6.5 1H3V14a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3z");
}
</style><path class="sgs5swrgw"/>`,
		"fallback": "fluent:layout-row-two-split-top-20-filled",
	});
}

export default Component;
