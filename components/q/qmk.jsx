import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nubav8b0y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nubav8b0y"/>`,
		"fallback": "thesvg:qmk",
	});
}

export default Component;
