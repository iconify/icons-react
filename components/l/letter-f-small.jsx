import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/og5hd0y1p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="og5hd0y1p"/>`,
		"fallback": "tabler:letter-f-small",
	});
}

export default Component;
