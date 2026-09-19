import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nf8h10baa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nf8h10baa"/>`,
		"fallback": "heroicons:pause-solid",
	});
}

export default Component;
