import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fs9a_6gej.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fs9a_6gej"/>`,
		"fallback": "icon-park-outline:leaves-two",
	});
}

export default Component;
