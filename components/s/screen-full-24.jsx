import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xcjiy60hl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xcjiy60hl"/>`,
		"fallback": "octicon:screen-full-24",
	});
}

export default Component;
