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
		"content": `<style>.msgnl-b_q {
  fill: currentColor;
  d: path("M12 21c-.55 0-1-.45-1-1V6.83l-.88.88A.996.996 0 1 1 8.71 6.3l2.59-2.59a.996.996 0 0 1 1.41 0L15.3 6.3a.996.996 0 1 1-1.41 1.41L13 6.83V9c0 3.62 2.89 6.22 4.97 7.62a.99.99 0 0 1 .14 1.53c-.33.33-.87.4-1.26.13c-1.59-1.06-2.89-2.28-3.85-3.59v5.3c0 .56-.45 1.01-1 1.01");
}
</style><path class="msgnl-b_q"/>`,
		"fallback": "ic:round-ramp-left",
	});
}

export default Component;
