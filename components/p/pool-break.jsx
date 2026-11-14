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
		"content": `<style>.q8_nj1bbg {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M13 2q3 0 3 3t-3 3t-3-3t3-3m8.5 8q0-3-3-3t-3 3t3 3t3-3M9.94 20.75q1.45 0 2.17-1.258q.721-1.259-.014-2.509l-1.942-3.299Q9.429 12.452 8 12.452t-2.154 1.231l-1.941 3.3q-.736 1.25-.015 2.509q.72 1.258 2.17 1.258zm8.56-6.25q3 0 3 3t-3 3t-3-3t3-3");
}
</style><path class="q8_nj1bbg"/>`,
		"fallback": "uix-solid:pool-break",
	});
}

export default Component;
