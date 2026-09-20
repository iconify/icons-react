import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tluiet_ya.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tluiet_ya"/>`,
		"fallback": "tdesign:unhappy-filled",
	});
}

export default Component;
