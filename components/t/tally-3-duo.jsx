import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gmp9qmbsc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gmp9qmbsc"/>`,
		"fallback": "iconaut:tally-3-duo",
	});
}

export default Component;
