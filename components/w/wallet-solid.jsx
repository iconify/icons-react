import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tvzn1-v5f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tvzn1-v5f"/>`,
		"fallback": "iconaut:wallet-solid",
	});
}

export default Component;
