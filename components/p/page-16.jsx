import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o36wcib6i.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="o36wcib6i"/>`,
		"fallback": "qlementine-icons:page-16",
	});
}

export default Component;
