import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f9m8hylsc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f9m8hylsc"/>`,
		"fallback": "weui:pencil-outlined",
	});
}

export default Component;
