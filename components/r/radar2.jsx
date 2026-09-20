import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cro2snina.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cro2snina"/>`,
		"fallback": "reicon:radar2",
	});
}

export default Component;
