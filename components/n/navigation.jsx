import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tzzp8s6ii.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tzzp8s6ii"/>`,
		"fallback": "tabler:navigation",
	});
}

export default Component;
