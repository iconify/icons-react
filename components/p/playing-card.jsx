import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lky1z4bdj.css';
import '../../css/k/kk6vprbmx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="lky1z4bdj"/><rect class="kk6vprbmx"/></g>`,
		"fallback": "lucide:playing-card",
	});
}

export default Component;
