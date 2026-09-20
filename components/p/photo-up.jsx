import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j6y2_1bpz.css';
import '../../css/w/w7w0jwdkd.css';
import '../../css/j/jdachpvzi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="j6y2_1bpz"/><path class="w7w0jwdkd"/><path class="jdachpvzi"/></g>`,
		"fallback": "tabler:photo-up",
	});
}

export default Component;
