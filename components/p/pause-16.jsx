import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tnv5cmbyn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tnv5cmbyn"/>`,
		"fallback": "qlementine-icons:pause-16",
	});
}

export default Component;
