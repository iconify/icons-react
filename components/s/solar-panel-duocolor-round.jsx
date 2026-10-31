import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/znhcflbhe.css';
import '../../css/l/lzezlv4aq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="znhcflbhe"/><path class="lzezlv4aq"/></g>`,
		"fallback": "coolicons:solar-panel-duocolor-round",
	});
}

export default Component;
