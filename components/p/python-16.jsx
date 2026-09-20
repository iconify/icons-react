import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/no9uvky3b.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="no9uvky3b"/>`,
		"fallback": "nonicons:python-16",
	});
}

export default Component;
