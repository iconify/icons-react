import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hvrzt5bkz.css';
import '../../css/f/fdvvb9b3j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hvrzt5bkz"/><path class="fdvvb9b3j"/>`,
		"fallback": "boxicons:microphone-big-filled",
	});
}

export default Component;
