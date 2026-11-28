import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fh8dgebiq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fh8dgebiq"/>`,
		"fallback": "noviair:tooth-check",
	});
}

export default Component;
