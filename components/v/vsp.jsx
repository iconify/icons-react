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
		"content": `<style>.vn6g0qbjs {
  fill: var(--svg-color--4138ab, #4138ab);
  d: path("M9.968 3.871H3l1.164 3.484H7.29l4.419 12.774h3.484L21 3.871h-3.774l-3.774 11.032z");
}
</style><path class="vn6g0qbjs"/>`,
		"fallback": "token-branded:vsp",
	});
}

export default Component;
