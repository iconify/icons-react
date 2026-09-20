import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mtcavo2ye.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mtcavo2ye"/>`,
		"fallback": "reicon:textalign-justifycenter-filled",
	});
}

export default Component;
