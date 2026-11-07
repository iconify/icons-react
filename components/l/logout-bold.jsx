import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i7wwok4ts.css';
import '../../css/o/otho62bps.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i7wwok4ts"/><path class="otho62bps"/>`,
		"fallback": "solar:logout-bold",
	});
}

export default Component;
