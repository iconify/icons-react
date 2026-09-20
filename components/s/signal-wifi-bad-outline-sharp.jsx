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
		"content": `<style>.yhx13tbac {
  fill: currentColor;
  d: path("M12 19.577L1.423 9q2.183-1.964 4.91-2.982Q9.063 5 12 5t5.666 1.018Q20.394 7.037 22.577 9l-3.43 3.43q-.233-.047-.462-.074q-.23-.027-.473-.027q-2.468 0-4.175 1.705q-1.708 1.705-1.708 4.178q0 .244.027.473t.075.461zM16.112 21l-.689-.688l2.1-2.1l-2.1-2.1l.689-.689l2.1 2.1l2.1-2.1l.688.689l-2.075 2.1l2.075 2.1l-.688.688l-2.1-2.075z");
}
</style><path class="yhx13tbac"/>`,
		"fallback": "material-symbols-light:signal-wifi-bad-outline-sharp",
	});
}

export default Component;
