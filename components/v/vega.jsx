import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yoorwcc0a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yoorwcc0a"/>`,
		"fallback": "token:vega",
	});
}

export default Component;
