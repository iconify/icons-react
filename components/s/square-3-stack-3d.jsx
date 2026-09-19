import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xcj6hkb8c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xcj6hkb8c"/>`,
		"fallback": "heroicons:square-3-stack-3d",
	});
}

export default Component;
