import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bxx_4tbiq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bxx_4tbiq"/>`,
		"fallback": "iconaut:stairs",
	});
}

export default Component;
