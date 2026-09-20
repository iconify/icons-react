import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/p6j9hk1nb.css';
import '../../css/g/gf116vptf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="p6j9hk1nb"/><path class="gf116vptf"/></g>`,
		"fallback": "lucide:merge",
	});
}

export default Component;
