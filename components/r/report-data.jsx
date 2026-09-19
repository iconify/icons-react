import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/npr0ncbkk.css';
import '../../css/p/pfm1z1-ik.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="npr0ncbkk"/><path class="pfm1z1-ik"/>`,
		"fallback": "carbon:report-data",
	});
}

export default Component;
