import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xgv66ypwa.css';
import '../../css/t/tzy1k5bvx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xgv66ypwa"/><path class="tzy1k5bvx"/>`,
		"fallback": "energy-icons:volume-x-48-bold",
	});
}

export default Component;
