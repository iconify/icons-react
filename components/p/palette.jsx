import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hex5etblr.css';
import '../../css/m/mfq_7cbvw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hex5etblr"/><path class="mfq_7cbvw"/>`,
		"fallback": "boxicons:palette",
	});
}

export default Component;
