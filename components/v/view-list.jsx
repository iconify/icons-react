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
		"content": `<style>.azlpklmqh {
  fill: currentColor;
  d: path("M8.5 19h10.885q.666 0 1.14-.475t.475-1.14V14.98H8.5zM3 9.02h4.5V5H4.616q-.667 0-1.141.475T3 6.615zM3 14h4.5v-3.98H3zm1.616 5H7.5v-4.02H3v2.405q0 .666.475 1.14t1.14.475M8.5 14H21v-3.98H8.5zm0-4.98H21V6.614q0-.666-.475-1.14T19.386 5H8.5z");
}
</style><path class="azlpklmqh"/>`,
		"fallback": "material-symbols-light:view-list",
	});
}

export default Component;
