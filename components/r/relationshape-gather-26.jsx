import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/acpjedb7v.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="acpjedb7v"/>`,
		"fallback": "garden:relationshape-gather-26",
	});
}

export default Component;
