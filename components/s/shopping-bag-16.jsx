import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uhg79_kue.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="uhg79_kue"/>`,
		"fallback": "qlementine-icons:shopping-bag-16",
	});
}

export default Component;
