import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/txxcw59-m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="txxcw59-m"/>`,
		"fallback": "uit:skype-alt",
	});
}

export default Component;
