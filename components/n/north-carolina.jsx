import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cb_hm7btx.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cb_hm7btx"/>`,
		"fallback": "pinhead:north-carolina",
	});
}

export default Component;
