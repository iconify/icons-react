import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y1kq_5bdb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y1kq_5bdb"/>`,
		"fallback": "griddy-icons:number-1",
	});
}

export default Component;
