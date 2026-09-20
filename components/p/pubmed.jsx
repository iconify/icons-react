import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y628m0xwt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y628m0xwt"/>`,
		"fallback": "thesvg-color:pubmed",
	});
}

export default Component;
