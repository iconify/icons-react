import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mjq8q_b4d.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mjq8q_b4d"/>`,
		"fallback": "streamline-flex:pen-tool-remix",
	});
}

export default Component;
