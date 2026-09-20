import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrhf0fbql.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nrhf0fbql"/>`,
		"fallback": "thesvg-color:statista",
	});
}

export default Component;
