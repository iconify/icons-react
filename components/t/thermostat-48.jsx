import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hac57wbhi.css';
import '../../css/t/trvs23rbx.css';
import '../../css/s/svhavybtd.css';
import '../../css/p/pb6h54xlu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hac57wbhi"/><path class="trvs23rbx"/><path class="svhavybtd"/><path class="pb6h54xlu"/>`,
		"fallback": "energy-icons:thermostat-48",
	});
}

export default Component;
