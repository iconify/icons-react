import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qhlftk48t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qhlftk48t"/>`,
		"fallback": "iconoir:non-binary",
	});
}

export default Component;
