import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/asscsnbhx.css';
import '../../css/v/vdgbqdo4t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="asscsnbhx"/><path class="vdgbqdo4t"/></g>`,
		"fallback": "tabler:mail-x",
	});
}

export default Component;
