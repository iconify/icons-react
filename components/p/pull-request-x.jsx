import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b5q551bwy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b5q551bwy"/>`,
		"fallback": "noviair-light:pull-request-x",
	});
}

export default Component;
