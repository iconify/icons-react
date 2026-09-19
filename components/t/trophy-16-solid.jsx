import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nr7uqc0zd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nr7uqc0zd"/>`,
		"fallback": "heroicons:trophy-16-solid",
	});
}

export default Component;
