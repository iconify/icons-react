import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uhmsf_b2k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uhmsf_b2k"/>`,
		"fallback": "noviair:minus",
	});
}

export default Component;
