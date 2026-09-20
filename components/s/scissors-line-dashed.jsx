import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vyd0dvb_q.css';
import '../../css/q/qa_v1ibag.css';
import '../../css/t/tupr9im7d.css';
import '../../css/z/zdeqsb64h.css';
import '../../css/b/bexvdxbjr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="vyd0dvb_q"/><circle class="qa_v1ibag"/><path class="tupr9im7d"/><circle class="zdeqsb64h"/><path class="bexvdxbjr"/></g>`,
		"fallback": "lucide:scissors-line-dashed",
	});
}

export default Component;
