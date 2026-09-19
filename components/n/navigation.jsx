import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xqrnv2r-e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xqrnv2r-e"/>`,
		"fallback": "ci:navigation",
	});
}

export default Component;
