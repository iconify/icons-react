import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uv_pyhgkk.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uv_pyhgkk"/>`,
		"fallback": "dinkie-icons:slightly-frowning-face-small-filled",
	});
}

export default Component;
