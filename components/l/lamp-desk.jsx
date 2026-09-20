import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yrldnrb1b.css';
import '../../css/a/an-mo36nu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="yrldnrb1b"/><path class="an-mo36nu"/></g>`,
		"fallback": "lucide:lamp-desk",
	});
}

export default Component;
