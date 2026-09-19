import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/becfcjx9o.css';

const viewBox = {"width":18,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="becfcjx9o"/>`,
		"fallback": "fontisto:train",
	});
}

export default Component;
