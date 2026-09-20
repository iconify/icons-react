import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/znl267sqw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="znl267sqw"/>`,
		"fallback": "mdi:loading",
	});
}

export default Component;
