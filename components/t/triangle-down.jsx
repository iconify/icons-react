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
		"content": `<style>.j2zbvkyod {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M7.56 3.75h8.88q1.951 0 2.925 1.691t-.006 3.379l-4.44 7.647q-.976 1.68-2.919 1.68t-2.919-1.68L4.641 8.82q-.979-1.688-.006-3.379Q5.609 3.75 7.56 3.75");
}
</style><path class="j2zbvkyod"/>`,
		"fallback": "uix-solid:triangle-down",
	});
}

export default Component;
