import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wvq6x6b8b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wvq6x6b8b"/>`,
		"fallback": "thesvg:singlestore",
	});
}

export default Component;
