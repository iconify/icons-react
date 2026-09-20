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
		"content": `<style>.respz2zoo {
  fill: currentColor;
  d: path("M11.1 9q-1.375 0-2.7.388T5.95 10.55L7 20h10l1.1-10h-.7q-.95 0-1.725-.137t-2.125-.538q-.575-.175-1.2-.25T11.1 9m-5.4-.625Q6.975 7.7 8.338 7.35T11.125 7q.75 0 1.488.1t1.462.3q1.25.35 1.913.475T17.4 8h.925l.425-4H5.25zM5.2 22L3 2h18l-2.2 20zm5.9-2H17H7z");
}
</style><path class="respz2zoo"/>`,
		"fallback": "material-symbols:water-full-outline-sharp",
	});
}

export default Component;
