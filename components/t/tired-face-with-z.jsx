import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t-v_u_7lw.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t-v_u_7lw"/>`,
		"fallback": "pinhead:tired-face-with-z",
	});
}

export default Component;
