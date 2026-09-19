import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fkb_xbcbf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fkb_xbcbf"/>`,
		"fallback": "heroicons-outline:microphone",
	});
}

export default Component;
