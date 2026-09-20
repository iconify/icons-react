import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yb60c3b8y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yb60c3b8y"/>`,
		"fallback": "reicon:star-slash",
	});
}

export default Component;
