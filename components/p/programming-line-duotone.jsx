import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wf89k6buf.css';
import '../../css/u/uj6mpsnbj.css';
import '../../css/k/kb5826gvq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="wf89k6buf"/><path class="uj6mpsnbj"/><path class="kb5826gvq"/></g>`,
		"fallback": "solar:programming-line-duotone",
	});
}

export default Component;
