import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xac5i9bpe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xac5i9bpe"/>`,
		"fallback": "bitcoin-icons:invoice-filled",
	});
}

export default Component;
