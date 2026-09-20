import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ok6tfckgx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ok6tfckgx"/>`,
		"fallback": "thesvg-color:sony",
	});
}

export default Component;
