import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zy35zvxwv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zy35zvxwv"/>`,
		"fallback": "noviair:scan-face-check",
	});
}

export default Component;
