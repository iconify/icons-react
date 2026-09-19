import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l2keqxlad.css';
import '../../css/c/cbeuwxbbo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l2keqxlad"/><path class="cbeuwxbbo"/>`,
		"fallback": "fontisto:room",
	});
}

export default Component;
