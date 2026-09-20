import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xcnv909_h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xcnv909_h"/>`,
		"fallback": "keyline-icons:package-arrow-up",
	});
}

export default Component;
