import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wu3ku-bpd.css';
import '../../css/p/pegestb2p.css';
import '../../css/b/biczcvbdd.css';
import '../../css/f/fsmo9ybwb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wu3ku-bpd"/><path class="pegestb2p"/><path class="biczcvbdd"/><path class="fsmo9ybwb"/></g>`,
		"fallback": "streamline-cyber-color:phone-call",
	});
}

export default Component;
