import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vrvvn5brx.css';
import '../../css/l/lv295ldgf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="vrvvn5brx"/><rect class="lv295ldgf"/></g>`,
		"fallback": "lucide:monitor-pc",
	});
}

export default Component;
