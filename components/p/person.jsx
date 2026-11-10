import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g4yu6jjnh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g4yu6jjnh"/>`,
		"fallback": "at-icons:person",
	});
}

export default Component;
