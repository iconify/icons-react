import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bpoi46r1u.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bpoi46r1u"/>`,
		"fallback": "qlementine-icons:menu-dots-16",
	});
}

export default Component;
