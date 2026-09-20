import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i4xl15bei.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i4xl15bei"/>`,
		"fallback": "thesvg-color:kit",
	});
}

export default Component;
