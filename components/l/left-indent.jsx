import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mv-e25byc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mv-e25byc"/>`,
		"fallback": "bx:left-indent",
	});
}

export default Component;
