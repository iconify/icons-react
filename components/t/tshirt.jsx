import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/encmt3bah.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="encmt3bah"/>`,
		"fallback": "reicon:tshirt",
	});
}

export default Component;
