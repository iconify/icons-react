import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/son5b-qcf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="son5b-qcf"/>`,
		"fallback": "iconaut:vector-distort-solid",
	});
}

export default Component;
