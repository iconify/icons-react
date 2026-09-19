import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hd_vh-osx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hd_vh-osx"/>`,
		"fallback": "cbi:opel",
	});
}

export default Component;
