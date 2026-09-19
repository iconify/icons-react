import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/l/l6qnrtb2h.css';
import '../../css/o/o39sc1brf.css';
import '../../css/f/fuxnvvbtt.css';
import '../../css/d/ddq83ybsi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="l6qnrtb2h"/><rect class="o39sc1brf"/><path class="fuxnvvbtt"/><path class="ddq83ybsi"/></g>`,
		"fallback": "icon-park:printer-two",
	});
}

export default Component;
