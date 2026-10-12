import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hptydwbgf.css';
import '../../css/e/elvpq5qeq.css';
import '../../css/x/xmn27y5eu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hptydwbgf"/><path class="elvpq5qeq"/><path class="xmn27y5eu"/>`,
		"fallback": "energy-icons:mop-48-bold",
	});
}

export default Component;
