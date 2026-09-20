import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gyojgbk_j.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gyojgbk_j"/>`,
		"fallback": "pinhead:liver-with-bile-duct",
	});
}

export default Component;
