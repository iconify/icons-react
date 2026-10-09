import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y8ovs__gx.css';
import '../../css/b/bhg_0dbbc.css';
import '../../css/y/yhupigbgw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y8ovs__gx"/><path class="bhg_0dbbc"/><path class="yhupigbgw"/>`,
		"fallback": "energy-icons:medal-48",
	});
}

export default Component;
