import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gig3dcc4x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gig3dcc4x"/>`,
		"fallback": "mingcute:watch-2-line",
	});
}

export default Component;
