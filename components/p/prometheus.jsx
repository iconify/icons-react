import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q98nqjbid.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q98nqjbid"/>`,
		"fallback": "simple-icons:prometheus",
	});
}

export default Component;
