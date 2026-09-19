import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x2hylacvh.css';

const viewBox = {"width":32,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x2hylacvh"/>`,
		"fallback": "fontisto:livestream",
	});
}

export default Component;
