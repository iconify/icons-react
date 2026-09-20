import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wbqw558-j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wbqw558-j"/>`,
		"fallback": "thesvg-color:qi",
	});
}

export default Component;
