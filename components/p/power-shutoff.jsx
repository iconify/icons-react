import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dn-xrwb_q.css';
import '../../css/q/qzipmcc8b.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dn-xrwb_q"/><path class="qzipmcc8b"/>`,
		"fallback": "temaki:power-shutoff",
	});
}

export default Component;
