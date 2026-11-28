import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gah-wbkyy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gah-wbkyy"/>`,
		"fallback": "noviair-light:tshirt-heart",
	});
}

export default Component;
