import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/b9-pt6s_l.css';
import '../../css/h/hy3v-sbrn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="b9-pt6s_l"/><path class="hy3v-sbrn"/></g>`,
		"fallback": "lucide-lab:stairs",
	});
}

export default Component;
