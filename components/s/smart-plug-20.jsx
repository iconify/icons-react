import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h5l7ikz-n.css';
import '../../css/x/xsu5q83hj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h5l7ikz-n"/><path class="xsu5q83hj"/>`,
		"fallback": "energy-icons:smart-plug-20",
	});
}

export default Component;
