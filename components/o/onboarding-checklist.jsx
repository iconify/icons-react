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
		"content": `<style>.ilwimabuq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13 21v-5.8m0-6.4V4q0-.098.019-.195t.057-.188t.093-.173t.124-.151t.151-.124t.173-.093t.188-.057T14 3h6q.098 0 .195.019t.188.057t.173.093q.081.054.151.124t.124.151q.055.082.093.173t.057.188T21 4v5.172m0 5.6V21m-9.5 0H22M2.5 6l1 1l1.75-2.25m2 1.25H9m-6.5 6l1 1l1.75-2.25m2 1.25H9m-6.5 6l1 1l1.75-2.25m2 1.25H9m2.75-6h6.5M16 9.75L18.25 12L16 14.25");
}
</style><path class="ilwimabuq"/>`,
		"fallback": "uix-sharp:onboarding-checklist",
	});
}

export default Component;
