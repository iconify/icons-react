import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ohcpt2bmp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ohcpt2bmp"/>`,
		"fallback": "reicon:rotate-left",
	});
}

export default Component;
