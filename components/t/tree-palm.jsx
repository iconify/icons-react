import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vil-2abad.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vil-2abad"/>`,
		"fallback": "keyline-icons:tree-palm",
	});
}

export default Component;
