import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.vv_d4wc7o {
  fill: var(--svg-color--4d5357, #4d5357);
  d: path("M2 2v7.5h10.3V34h7.5V9.5h10.3V2zm52.5 0l-6.6 13.2L41.4 2h-7.5v32h7.5V20.8L47.9 34l6.6-13.2V34H62V2z");
}
</style><path class="vv_d4wc7o"/>`,
		"fallback": "emojione:trade-mark",
	});
}

export default Component;
