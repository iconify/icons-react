import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c4fi4u11f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c4fi4u11f"/>`,
		"fallback": "thesvg-color:metro-de-madrid",
	});
}

export default Component;
