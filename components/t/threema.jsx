import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cou1a1nam.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cou1a1nam"/>`,
		"fallback": "thesvg-color:threema",
	});
}

export default Component;
