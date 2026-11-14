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
		"content": `<style>.xbt3txpvy {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M6 2.25h12q2.75 0 2.75 2.75T18 7.75H6Q3.25 7.75 3.25 5T6 2.25m12 7H6q-2.75 0-2.75 2.75T6 14.75h12q2.75 0 2.75-2.75T18 9.25m-12 7h12q2.75 0 2.75 2.75T18 21.75H6q-2.75 0-2.75-2.75T6 16.25");
}
</style><path class="xbt3txpvy"/>`,
		"fallback": "uix-solid:stack-data",
	});
}

export default Component;
