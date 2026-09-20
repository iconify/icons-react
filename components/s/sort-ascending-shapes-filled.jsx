import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mwy2_jbbs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mwy2_jbbs"/>`,
		"fallback": "tabler:sort-ascending-shapes-filled",
	});
}

export default Component;
