import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ejmildjlw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ejmildjlw"/>`,
		"fallback": "noviair:traffic-light",
	});
}

export default Component;
