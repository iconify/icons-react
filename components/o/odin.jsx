import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fbt85wbpk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fbt85wbpk"/>`,
		"fallback": "thesvg-color:odin",
	});
}

export default Component;
