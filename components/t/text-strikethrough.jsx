import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ze9mk6oeg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ze9mk6oeg"/>`,
		"fallback": "andrsrxn:text-strikethrough",
	});
}

export default Component;
