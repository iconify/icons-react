import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/nondt9cfi.css';
import '../../css/c/csccz__my.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="nondt9cfi"/><path class="csccz__my"/></g>`,
		"fallback": "streamline-freehand:job-candidate-target-1",
	});
}

export default Component;
