import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/usvltujtk.css';
import '../../css/g/g6i-kkbvy.css';
import '../../css/z/z6btbdcwc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="usvltujtk"/><path class="g6i-kkbvy"/><path class="z6btbdcwc"/></g>`,
		"fallback": "lucide:package-open",
	});
}

export default Component;
