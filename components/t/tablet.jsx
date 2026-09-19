import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ujnlsrl9q.css';

const viewBox = {"width":18,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ujnlsrl9q"/>`,
		"fallback": "fontisto:tablet",
	});
}

export default Component;
