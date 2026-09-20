import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yvwb37b7x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yvwb37b7x"/>`,
		"fallback": "uis:store-slash",
	});
}

export default Component;
