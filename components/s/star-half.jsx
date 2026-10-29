import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u8dzrhbsa.css';
import '../../css/i/i91j8nbko.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u8dzrhbsa"/><path class="i91j8nbko"/>`,
		"fallback": "withicons-bauhaus:star-half",
	});
}

export default Component;
