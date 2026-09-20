import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/csdr6sb4x.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="csdr6sb4x"/>`,
		"fallback": "jam:volume-down-square-f",
	});
}

export default Component;
