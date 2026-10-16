import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l_49f5bfn.css';
import '../../css/o/oz7q2qb4l.css';
import '../../css/q/qxq5b3bsr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l_49f5bfn"/><path class="oz7q2qb4l"/><path class="qxq5b3bsr"/>`,
		"fallback": "energy-icons:sun-angle-48",
	});
}

export default Component;
