import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bkem5w7zw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bkem5w7zw"/>`,
		"fallback": "thesvg-color:sparkasse",
	});
}

export default Component;
