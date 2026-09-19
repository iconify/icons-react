import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h7hr3-2pu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="h7hr3-2pu"/>`,
		"fallback": "heroicons:star-16-solid",
	});
}

export default Component;
