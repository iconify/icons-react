import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/etlms99xu.css';
import '../../css/e/edf1cpbtr.css';
import '../../css/q/qpjl1967d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="etlms99xu"/><path class="edf1cpbtr"/><path class="qpjl1967d"/>`,
		"fallback": "energy-icons:marker-battery-48-bold",
	});
}

export default Component;
