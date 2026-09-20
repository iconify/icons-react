import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/inikvgb3j.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="inikvgb3j"/>`,
		"fallback": "pinhead:laughing-face",
	});
}

export default Component;
