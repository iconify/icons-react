import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u80r11ida.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="u80r11ida"/>`,
		"fallback": "streamline:radio-solid",
	});
}

export default Component;
