import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f7_41vbux.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f7_41vbux"/>`,
		"fallback": "iconaut:shapes-solid",
	});
}

export default Component;
