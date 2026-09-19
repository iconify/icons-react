import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ya4h8w4gs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ya4h8w4gs"/>`,
		"fallback": "iconamoon:mode-dark-light",
	});
}

export default Component;
