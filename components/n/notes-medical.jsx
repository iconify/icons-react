import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hat5ykuoc.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hat5ykuoc"/>`,
		"fallback": "fa-solid:notes-medical",
	});
}

export default Component;
