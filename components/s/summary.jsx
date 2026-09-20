import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/uiemfw8fh.css';
import '../../css/e/edbeavb2h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="uiemfw8fh"/><path class="edbeavb2h"/></g>`,
		"fallback": "lucide:summary",
	});
}

export default Component;
