import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h_0m1je2y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h_0m1je2y"/>`,
		"fallback": "reicon:pen-writing2-filled",
	});
}

export default Component;
