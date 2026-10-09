import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1nb12b5u.css';
import '../../css/e/en62kpb-g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n1nb12b5u"/><path class="en62kpb-g"/>`,
		"fallback": "energy-icons:run-of-river-48",
	});
}

export default Component;
