import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yc9lglftr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yc9lglftr"/>`,
		"fallback": "reicon:square-sort-h",
	});
}

export default Component;
