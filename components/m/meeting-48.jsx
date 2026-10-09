import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e6ws95bmc.css';
import '../../css/g/gtwn_2b4z.css';
import '../../css/l/lsfhf11ql.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e6ws95bmc"/><path class="gtwn_2b4z"/><path class="lsfhf11ql"/>`,
		"fallback": "energy-icons:meeting-48",
	});
}

export default Component;
