import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u4a8t74cl.css';
import '../../css/g/g-6i4by5o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u4a8t74cl"/><rect class="g-6i4by5o"/>`,
		"fallback": "boxicons:shapes-filled",
	});
}

export default Component;
