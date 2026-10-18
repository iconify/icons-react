import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eqwxp2t9l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eqwxp2t9l"/>`,
		"fallback": "vadivam:presentation",
	});
}

export default Component;
