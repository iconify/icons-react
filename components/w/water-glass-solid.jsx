import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b7369f7ia.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b7369f7ia"/>`,
		"fallback": "iconaut:water-glass-solid",
	});
}

export default Component;
