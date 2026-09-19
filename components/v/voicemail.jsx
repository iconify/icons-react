import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pveucb2ak.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pveucb2ak"/>`,
		"fallback": "circum:voicemail",
	});
}

export default Component;
