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
		"content": `<style>.bs7sa0bpz {
  fill: currentColor;
  d: path("M14 8v2h-3L8.31 8.82L7 12.75V22H3V12l1.58-4.63A2 2 0 0 1 6.46 6c.28 0 .56.05.84.18l4.15 1.83zM8 1c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m1 18h12v-2H9zm10.5-3c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5s.67 1.5 1.5 1.5M13 13v-2H9v2h2v3h6v-5h-2v2z");
}
</style><path class="bs7sa0bpz"/>`,
		"fallback": "ic:sharp-baby-changing-station",
	});
}

export default Component;
