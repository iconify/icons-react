import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f6r28jcem.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f6r28jcem"/>`,
		"fallback": "pixel:slack",
	});
}

export default Component;
