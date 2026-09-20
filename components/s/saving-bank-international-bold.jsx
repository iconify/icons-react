import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n5bgg0b-d.css';
import '../../css/c/cyspyob_q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n5bgg0b-d"/><path class="cyspyob_q"/>`,
		"fallback": "streamline-ultimate:saving-bank-international-bold",
	});
}

export default Component;
