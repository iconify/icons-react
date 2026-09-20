import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gbtfd1a_b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gbtfd1a_b"/>`,
		"fallback": "thesvg-color:unstop",
	});
}

export default Component;
