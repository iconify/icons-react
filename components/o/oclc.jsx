import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cg0-37bsx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cg0-37bsx"/>`,
		"fallback": "thesvg-color:oclc",
	});
}

export default Component;
