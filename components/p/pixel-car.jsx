import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c9v_h1fdw.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c9v_h1fdw"/>`,
		"fallback": "pinhead:pixel-car",
	});
}

export default Component;
