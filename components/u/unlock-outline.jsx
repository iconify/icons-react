import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/s/sh_6mzbig.css';
import '../../css/o/o51z98v9d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><rect class="sh_6mzbig"/><path class="o51z98v9d"/></g>`,
		"fallback": "bitcoin-icons:unlock-outline",
	});
}

export default Component;
