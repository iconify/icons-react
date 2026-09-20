import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r_d4z1bpe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="r_d4z1bpe"/>`,
		"fallback": "token:scb",
	});
}

export default Component;
