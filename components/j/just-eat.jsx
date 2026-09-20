import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nbalmob2a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nbalmob2a"/>`,
		"fallback": "thesvg-color:just-eat",
	});
}

export default Component;
