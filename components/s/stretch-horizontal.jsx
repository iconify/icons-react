import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/iu6-babcr.css';
import '../../css/k/k766skkve.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="iu6-babcr"/><rect class="k766skkve"/></g>`,
		"fallback": "lucide:stretch-horizontal",
	});
}

export default Component;
