import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tjrfh32jo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tjrfh32jo"/>`,
		"fallback": "octicon:list-ordered-24",
	});
}

export default Component;
