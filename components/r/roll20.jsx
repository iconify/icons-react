import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/id-1qxbnk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="id-1qxbnk"/>`,
		"fallback": "thesvg-color:roll20",
	});
}

export default Component;
