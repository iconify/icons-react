import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y2ypn6bjk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y2ypn6bjk"/>`,
		"fallback": "reicon:receipt4-filled",
	});
}

export default Component;
