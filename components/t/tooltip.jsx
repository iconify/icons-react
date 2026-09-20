import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/knft6-b5j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="knft6-b5j"/>`,
		"fallback": "majesticons:tooltip",
	});
}

export default Component;
