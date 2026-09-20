import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtc3gqdsw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jtc3gqdsw"/>`,
		"fallback": "thesvg:roll20",
	});
}

export default Component;
