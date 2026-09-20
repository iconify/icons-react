import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/m6a3e3btz.css';
import '../../css/m/mv4687bgc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="m6a3e3btz"/><path class="mv4687bgc"/></g>`,
		"fallback": "lucide:router",
	});
}

export default Component;
