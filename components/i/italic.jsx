import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zavzltd4q.css';

const viewBox = {"width":24,"height":24,"left":-7.5,"top":-7};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zavzltd4q"/>`,
		"fallback": "jam:italic",
	});
}

export default Component;
