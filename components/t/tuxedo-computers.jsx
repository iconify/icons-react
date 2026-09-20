import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wa6r-zkqb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wa6r-zkqb"/>`,
		"fallback": "thesvg-color:tuxedo-computers",
	});
}

export default Component;
