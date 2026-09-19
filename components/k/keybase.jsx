import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_r27j01j.css';

const viewBox = {"width":472,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="t_r27j01j"/>`,
		"fallback": "file-icons:keybase",
	});
}

export default Component;
