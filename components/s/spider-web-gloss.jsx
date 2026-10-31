import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pl859o1ln.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pl859o1ln"/>`,
		"fallback": "withicons:spider-web-gloss",
	});
}

export default Component;
