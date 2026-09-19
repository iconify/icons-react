import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xcgtlkb6g.css';

const viewBox = {"width":368,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xcgtlkb6g"/>`,
		"fallback": "zmdi:view-module",
	});
}

export default Component;
