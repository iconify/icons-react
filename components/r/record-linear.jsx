import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b-55t6b_l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="b-55t6b_l"/>`,
		"fallback": "solar:record-linear",
	});
}

export default Component;
