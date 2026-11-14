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
		"content": `<style>.yeqsw8b2s {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M22.25 12Q22.25 1.75 12 1.75T1.75 12T12 22.25T22.25 12M5 9q0-3 3.75-3t3.75 3t-3.75 3T5 9m10.25.75q3.25 0 3.25 2.5t-3.25 2.5t-3.25-2.5t3.25-2.5M7 16.25Q7 14 9.75 14t2.75 2.25t-2.75 2.25T7 16.25");
}
</style><path class="yeqsw8b2s"/>`,
		"fallback": "uix-solid:pores",
	});
}

export default Component;
