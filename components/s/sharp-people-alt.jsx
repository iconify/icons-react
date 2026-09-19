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
		"content": `<style>.iiab3gy9g {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M16.67 13.13C18.04 14.06 19 15.32 19 17v3h4v-3c0-2.18-3.57-3.47-6.33-3.87");
}

.p9cu7eble {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4c-.47 0-.91.1-1.33.24a5.98 5.98 0 0 1 0 7.52c.42.14.86.24 1.33.24m-6 1c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4");
}

.rw0diq37y {
  cx: 9px;
  cy: 8px;
  r: 4px;
  fill: currentColor;
  fill-rule: evenodd;
}
</style><path class="iiab3gy9g"/><circle class="rw0diq37y"/><path class="p9cu7eble"/>`,
		"fallback": "ic:sharp-people-alt",
	});
}

export default Component;
