import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/y4nx2qbry.css';
import '../../css/m/m4czh3vxz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="y4nx2qbry"/><path class="m4czh3vxz"/></g>`,
		"fallback": "lucide:mail-pen",
	});
}

export default Component;
