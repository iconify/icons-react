import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aexm2vbff.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aexm2vbff"/>`,
		"fallback": "dinkie-icons:keycap-windows-small-filled",
	});
}

export default Component;
