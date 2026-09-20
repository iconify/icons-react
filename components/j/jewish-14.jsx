import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hd5r8wuvk.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hd5r8wuvk"/>`,
		"fallback": "osmic:jewish-14",
	});
}

export default Component;
