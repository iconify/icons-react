import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hgi0-jbur.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hgi0-jbur"/>`,
		"fallback": "lets-icons:play-light",
	});
}

export default Component;
