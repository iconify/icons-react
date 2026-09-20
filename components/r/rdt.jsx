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
		"content": `<style>.co6bcgn4l {
  fill: var(--svg-color--6601ff, #6601ff);
  d: path("M12.021 4.059L8.194 7.897l3.827 3.833l3.828-3.833zM6.828 9.554L3 13.392l3.828 3.833l3.827-3.833zm6.517 3.838l3.827-3.838L21 13.392l-3.828 3.833zm-6.126 6.549l4.85-4.86l4.844 4.86z");
}
</style><path class="co6bcgn4l"/>`,
		"fallback": "token-branded:rdt",
	});
}

export default Component;
