import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ncqap6kqt.css';
import '../../css/w/w4cmqe7qc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ncqap6kqt"/><path class="w4cmqe7qc"/>`,
		"fallback": "energy-icons:pound-48",
	});
}

export default Component;
