import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pjsf23bet.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pjsf23bet"/>`,
		"fallback": "mdi-light:repeat-off",
	});
}

export default Component;
