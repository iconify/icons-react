import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wx3vb3kpu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wx3vb3kpu"/>`,
		"fallback": "tabler:scan-letter-t",
	});
}

export default Component;
