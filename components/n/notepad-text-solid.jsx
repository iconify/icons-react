import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/urpzf1b4o.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="urpzf1b4o"/>`,
		"fallback": "streamline-flex:notepad-text-solid",
	});
}

export default Component;
