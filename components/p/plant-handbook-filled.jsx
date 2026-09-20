import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m370vb7uq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="m370vb7uq"/>`,
		"fallback": "ix:plant-handbook-filled",
	});
}

export default Component;
