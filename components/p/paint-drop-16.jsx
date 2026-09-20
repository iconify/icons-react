import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mgevnjv-i.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mgevnjv-i"/>`,
		"fallback": "qlementine-icons:paint-drop-16",
	});
}

export default Component;
