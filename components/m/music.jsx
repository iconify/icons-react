import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iwg_h6bud.css';

const viewBox = {"width":1200,"height":1200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iwg_h6bud"/>`,
		"fallback": "el:music",
	});
}

export default Component;
