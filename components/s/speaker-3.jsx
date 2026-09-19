import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pup2v7bef.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pup2v7bef"/>`,
		"fallback": "f7:speaker-3",
	});
}

export default Component;
