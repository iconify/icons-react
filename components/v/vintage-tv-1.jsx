import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oqfh6jc-b.css';
import '../../css/q/q7imqmbxd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oqfh6jc-b"/><path class="q7imqmbxd"/>`,
		"fallback": "streamline-freehand:vintage-tv-1",
	});
}

export default Component;
