import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0g83cboy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0g83cboy"/>`,
		"fallback": "octicon:wall-24",
	});
}

export default Component;
