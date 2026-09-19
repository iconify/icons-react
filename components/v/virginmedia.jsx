import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gfd2wsmwi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gfd2wsmwi"/>`,
		"fallback": "cbi:virginmedia",
	});
}

export default Component;
