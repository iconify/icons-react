import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/c2dvy5bdn.css';
import '../../css/z/zmuljubko.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="c2dvy5bdn"/><path class="zmuljubko"/></g>`,
		"fallback": "lucide:sticky-note",
	});
}

export default Component;
