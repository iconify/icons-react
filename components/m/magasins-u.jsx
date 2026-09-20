import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lfzel6m2y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lfzel6m2y"/>`,
		"fallback": "thesvg-color:magasins-u",
	});
}

export default Component;
