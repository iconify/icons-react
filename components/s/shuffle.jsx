import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yt7fgz99d.css';
import '../../css/q/qa0bdybdf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="yt7fgz99d"/><path class="qa0bdybdf"/></g>`,
		"fallback": "vadivam:shuffle",
	});
}

export default Component;
