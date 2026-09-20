import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lgqvp2byi.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lgqvp2byi"/>`,
		"fallback": "picon:playstation",
	});
}

export default Component;
