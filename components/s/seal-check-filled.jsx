import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nmwwk298f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nmwwk298f"/>`,
		"fallback": "boxicons:seal-check-filled",
	});
}

export default Component;
