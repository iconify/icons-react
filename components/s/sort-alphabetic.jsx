import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/csvt9dbkc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="csvt9dbkc"/>`,
		"fallback": "pixelarticons:sort-alphabetic",
	});
}

export default Component;
