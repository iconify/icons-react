import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t14b_mbbi.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t14b_mbbi"/>`,
		"fallback": "f7:music-albums-fill",
	});
}

export default Component;
