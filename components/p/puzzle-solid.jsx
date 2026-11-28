import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u65bls48j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u65bls48j"/>`,
		"fallback": "iconaut:puzzle-solid",
	});
}

export default Component;
