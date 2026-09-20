import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hu2g9iiqo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hu2g9iiqo"/>`,
		"fallback": "thesvg:smartthings",
	});
}

export default Component;
