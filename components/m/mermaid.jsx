import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/em4j74_bd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="em4j74_bd"/>`,
		"fallback": "thesvg:mermaid",
	});
}

export default Component;
