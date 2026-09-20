import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/km51robcq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="km51robcq"/>`,
		"fallback": "reicon:three-d-square-filled",
	});
}

export default Component;
