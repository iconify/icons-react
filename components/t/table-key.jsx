import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fp1x9_euk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fp1x9_euk"/>`,
		"fallback": "mdi:table-key",
	});
}

export default Component;
