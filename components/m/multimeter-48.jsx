import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/batmvgb8l.css';
import '../../css/m/mud9nbkvp.css';
import '../../css/n/nv6m4c8xt.css';
import '../../css/z/zczeh0h7o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="batmvgb8l"/><path class="mud9nbkvp"/><path class="nv6m4c8xt"/><path class="zczeh0h7o"/>`,
		"fallback": "energy-icons:multimeter-48",
	});
}

export default Component;
