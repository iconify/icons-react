import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gto6vda9r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gto6vda9r"/>`,
		"fallback": "codex:plus",
	});
}

export default Component;
