import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l0tww8tsi.css';
import '../../css/a/azjk1obih.css';
import '../../css/y/y_yvwz1md.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l0tww8tsi"/><path class="azjk1obih"/><path class="y_yvwz1md"/>`,
		"fallback": "energy-icons:monitor-off-48",
	});
}

export default Component;
