import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rvnqahb0g.css';
import '../../css/r/rhk_vcboz.css';
import '../../css/i/in-ffcbqq.css';
import '../../css/n/ne-pb9qlb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rvnqahb0g"><path class="rhk_vcboz"/><path class="in-ffcbqq"/><path class="ne-pb9qlb"/></g>`,
		"fallback": "streamline-plump:mail-outgoing",
	});
}

export default Component;
