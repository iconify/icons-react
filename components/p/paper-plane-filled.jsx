import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3a24bww.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vm3a24bww"/>`,
		"fallback": "boxicons:paper-plane-filled",
	});
}

export default Component;
