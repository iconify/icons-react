import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sft3gqb2b.css';
import '../../css/h/hkp4q6bsa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="sft3gqb2b"/><path class="hkp4q6bsa"/></g>`,
		"fallback": "lucide:move-3-d",
	});
}

export default Component;
