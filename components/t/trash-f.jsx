import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u4jeqmivt.css';

const viewBox = {"width":24,"height":24,"left":-3,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u4jeqmivt"/>`,
		"fallback": "jam:trash-f",
	});
}

export default Component;
