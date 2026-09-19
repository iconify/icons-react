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
		"content": `<style>.dfnmtlbfl {
  fill: currentColor;
  d: path("M12 21a9 9 0 0 0 0-18h-1v4h2V5.08c3.39.49 6 3.39 6 6.92c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-1.68.59-3.22 1.58-4.42L12 13l1.41-1.41l-6.8-6.8v.02C4.42 6.45 3 9.05 3 12c0 4.97 4.02 9 9 9");
}

.oclompb7u {
  cx: 12px;
  cy: 17px;
  r: 1px;
  fill: currentColor;
}

.on4fre1ek {
  cx: 17px;
  cy: 12px;
  r: 1px;
  fill: currentColor;
}

.qa-1pv6bo {
  cx: 7px;
  cy: 12px;
  r: 1px;
  fill: currentColor;
}
</style><path class="dfnmtlbfl"/><circle class="oclompb7u"/><circle class="on4fre1ek"/><circle class="qa-1pv6bo"/>`,
		"fallback": "ic:twotone-av-timer",
	});
}

export default Component;
