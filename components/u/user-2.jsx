import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qcs_7qqsg.css';
import '../../css/w/wrte12bjr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="qcs_7qqsg"/><path class="wrte12bjr"/></g>`,
		"fallback": "lucide:user-2",
	});
}

export default Component;
