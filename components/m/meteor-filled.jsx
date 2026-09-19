import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pnf8t8yjt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pnf8t8yjt"/>`,
		"fallback": "boxicons:meteor-filled",
	});
}

export default Component;
