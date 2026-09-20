import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/v2xh89b7y.css';
import '../../css/w/wq3qu2bin.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="v2xh89b7y"/><path class="wq3qu2bin"/></g>`,
		"fallback": "lucide:music-2",
	});
}

export default Component;
