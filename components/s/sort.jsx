import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g64z6fbez.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g64z6fbez"/>`,
		"fallback": "bx:sort",
	});
}

export default Component;
