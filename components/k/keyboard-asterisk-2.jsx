import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vik2i1kjg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vik2i1kjg"/>`,
		"fallback": "streamline-freehand-color:keyboard-asterisk-2",
	});
}

export default Component;
