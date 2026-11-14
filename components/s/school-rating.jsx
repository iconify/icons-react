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
		"content": `<style>.kqzfh4bvy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m6.004 7.174l5.294-2.802a1.5 1.5 0 0 1 1.404 0l5.294 2.802a1.5 1.5 0 0 1 0 2.652l-5.294 2.802a1.5 1.5 0 0 1-1.404 0L6.004 9.826a1.5 1.5 0 0 1 0-2.652M6 10.5V15c0 1.5 3 2.5 6 2.5l.216-.002M18 12.199V10.5m-14.5-2v6m14.764.792l.166.335a1.5 1.5 0 0 0 1.129.821l.37.053a.574.574 0 0 1 .318.979l-.268.26a1.5 1.5 0 0 0-.431 1.328l.063.368a.574.574 0 0 1-.832.605l-.331-.174a1.5 1.5 0 0 0-1.396 0l-.331.174a.574.574 0 0 1-.832-.605l.063-.368a1.5 1.5 0 0 0-.431-1.328l-.268-.26a.574.574 0 0 1 .318-.979l.37-.053a1.5 1.5 0 0 0 1.129-.821l.166-.335a.574.574 0 0 1 1.028 0");
}
</style><path class="kqzfh4bvy"/>`,
		"fallback": "uix:school-rating",
	});
}

export default Component;
