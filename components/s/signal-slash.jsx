import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rctg5spaj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rctg5spaj"/>`,
		"fallback": "boxicons:signal-slash",
	});
}

export default Component;
