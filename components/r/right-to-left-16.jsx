import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ci1u_l1tk.css';
import '../../css/a/aiuvj1b6y.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ci1u_l1tk"/><path class="aiuvj1b6y"/>`,
		"fallback": "qlementine-icons:right-to-left-16",
	});
}

export default Component;
