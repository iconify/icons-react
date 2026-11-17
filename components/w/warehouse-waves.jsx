import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pp9gwxb2f.css';
import '../../css/m/mf34seb_q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="pp9gwxb2f"/><path class="mf34seb_q"/></g>`,
		"fallback": "lucide:warehouse-waves",
	});
}

export default Component;
