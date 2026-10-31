import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eoqd6t1qf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eoqd6t1qf"/>`,
		"fallback": "cbi:lampada-parete",
	});
}

export default Component;
