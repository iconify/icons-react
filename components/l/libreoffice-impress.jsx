import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q10zoq2ps.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q10zoq2ps"/>`,
		"fallback": "thesvg-color:libreoffice-impress",
	});
}

export default Component;
