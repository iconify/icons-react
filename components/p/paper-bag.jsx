import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j13493x8w.css';
import '../../css/o/owp4ymbuq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="j13493x8w"/><path class="owp4ymbuq"/></g>`,
		"fallback": "lucide:paper-bag",
	});
}

export default Component;
