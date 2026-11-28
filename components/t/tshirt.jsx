import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n-bciz-_j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n-bciz-_j"/>`,
		"fallback": "noviair-light:tshirt",
	});
}

export default Component;
