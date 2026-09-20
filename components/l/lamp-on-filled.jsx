import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft7_yqb2k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ft7_yqb2k"/>`,
		"fallback": "reicon:lamp-on-filled",
	});
}

export default Component;
