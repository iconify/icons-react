import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ij19_zngc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ij19_zngc"/>`,
		"fallback": "la:trash-restore-alt",
	});
}

export default Component;
