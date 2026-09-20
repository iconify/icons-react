import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nk7xh8b3a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nk7xh8b3a"/>`,
		"fallback": "uil:sad-crying",
	});
}

export default Component;
