import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jmtfnlb2v.css';
import '../../css/q/qt6ua231o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="jmtfnlb2v"/><path class="qt6ua231o"/></g>`,
		"fallback": "tabler:timeline",
	});
}

export default Component;
