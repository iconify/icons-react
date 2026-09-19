import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l79gr7b1m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l79gr7b1m"/>`,
		"fallback": "cbi:scene-relax",
	});
}

export default Component;
