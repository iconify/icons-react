import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ij8-4-wub.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ij8-4-wub"/>`,
		"fallback": "thesvg-color:norco",
	});
}

export default Component;
