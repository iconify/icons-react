import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aqdtccc3b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aqdtccc3b"/>`,
		"fallback": "thesvg-color:linkwarden",
	});
}

export default Component;
