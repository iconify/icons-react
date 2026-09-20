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
		"content": `<style>.zhcm5sbma {
  fill: currentColor;
  d: path("M11.5 19.48V5.94L9.754 7.688q-.14.14-.341.15q-.202.01-.367-.156q-.16-.16-.16-.354t.16-.354l2.388-2.388q.132-.131.268-.184q.137-.053.298-.053t.298.053t.268.184l2.388 2.388q.14.14.153.342t-.153.366q-.16.16-.354.16t-.354-.16L12.5 5.94V9q0 2.86 1.76 4.884t3.394 3.131q.202.135.27.345q.068.211-.091.37q-.177.178-.428.164t-.478-.173q-1.529-1.063-2.657-2.298t-1.77-2.55v6.608q0 .213-.143.356t-.357.144t-.357-.144t-.143-.356");
}
</style><path class="zhcm5sbma"/>`,
		"fallback": "material-symbols-light:ramp-left-rounded",
	});
}

export default Component;
