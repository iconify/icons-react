import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jqoqidbfs.css';
import '../../css/o/oa5v05bkq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jqoqidbfs"/><path class="oa5v05bkq"/>`,
		"fallback": "energy-icons:voltage-high-48",
	});
}

export default Component;
