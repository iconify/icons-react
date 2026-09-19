import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p1_ibvt6l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p1_ibvt6l"/>`,
		"fallback": "hugeicons:typescript-02",
	});
}

export default Component;
