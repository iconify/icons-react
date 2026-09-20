import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z55t-is9f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z55t-is9f"/>`,
		"fallback": "mdi:odnoklassniki",
	});
}

export default Component;
