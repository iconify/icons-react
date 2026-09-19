import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qgwpg6btu.css';

const viewBox = {"width":1091,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qgwpg6btu"/>`,
		"fallback": "websymbol:popup",
	});
}

export default Component;
