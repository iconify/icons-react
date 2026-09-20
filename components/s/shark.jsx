import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jj5qchnzs.css';
import '../../css/o/o7h4tzkuj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="jj5qchnzs"/><path class="o7h4tzkuj"/></g>`,
		"fallback": "lucide-lab:shark",
	});
}

export default Component;
