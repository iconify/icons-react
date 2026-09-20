import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qa_v1ibag.css';
import '../../css/n/npzbi206w.css';
import '../../css/w/wnnq1tbxl.css';
import '../../css/r/ruls2nfbv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="qa_v1ibag"/><circle class="npzbi206w"/><circle class="wnnq1tbxl"/><path class="ruls2nfbv"/></g>`,
		"fallback": "meteor-icons:paw",
	});
}

export default Component;
