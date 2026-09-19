import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zaiqaib4o.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zaiqaib4o"/>`,
		"fallback": "dinkie-icons:video-game",
	});
}

export default Component;
