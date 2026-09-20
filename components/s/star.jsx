import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/id9lo4b-f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="id9lo4b-f"/>`,
		"fallback": "mdi-light:star",
	});
}

export default Component;
