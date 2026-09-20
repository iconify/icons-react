import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y5ni0d56x.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y5ni0d56x"/>`,
		"fallback": "qlementine-icons:tool-16",
	});
}

export default Component;
