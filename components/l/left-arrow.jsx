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
		"content": `<style>.nejl9bc-q {
  fill: var(--svg-color--fff, #fff);
  d: path("M28.04 47.85L9.578 31.958l18.285-15.965c2.563.188 4.582 1.897 4.589 3.986l.018 3.55l16.654-.09a5.083 5.083 0 0 1 5.11 5.05l.031 6.583a5.077 5.077 0 0 1-5.05 5.103l-16.656.087l.018 3.546c.014 2.087-1.973 3.816-4.535 4.04");
}

.nybederid {
  fill: var(--svg-color--1b75bb, #1b75bb);
  d: path("M63.792 56.913a6.877 6.877 0 0 1-6.878 6.882H6.874A6.88 6.88 0 0 1 0 56.913V6.877A6.876 6.876 0 0 1 6.874 0h50.041a6.876 6.876 0 0 1 6.878 6.877z");
}
</style><path class="nybederid"/><path class="nejl9bc-q"/>`,
		"fallback": "emojione-v1:left-arrow",
	});
}

export default Component;
