import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e2abiolpf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e2abiolpf"/>`,
		"fallback": "mdi:relation-zero-or-many-to-many",
	});
}

export default Component;
