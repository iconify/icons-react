import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oody99b2i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oody99b2i"/>`,
		"fallback": "reicon:maximize-circle-filled",
	});
}

export default Component;
