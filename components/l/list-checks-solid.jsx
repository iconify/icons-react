import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/un9kppxfb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="un9kppxfb"/>`,
		"fallback": "withicons:list-checks-solid",
	});
}

export default Component;
