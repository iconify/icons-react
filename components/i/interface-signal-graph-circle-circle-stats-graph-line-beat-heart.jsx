import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dn94_qbhs.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dn94_qbhs"/>`,
		"fallback": "streamline:interface-signal-graph-circle-circle-stats-graph-line-beat-heart",
	});
}

export default Component;
