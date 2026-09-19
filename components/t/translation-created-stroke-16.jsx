import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/de93w3jem.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="de93w3jem"/>`,
		"fallback": "garden:translation-created-stroke-16",
	});
}

export default Component;
