import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nj24h4blp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nj24h4blp"/>`,
		"fallback": "reicon:scooter2-filled",
	});
}

export default Component;
