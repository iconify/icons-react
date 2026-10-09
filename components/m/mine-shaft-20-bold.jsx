import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mvjm-6b1r.css';
import '../../css/h/hn820sblx.css';
import '../../css/w/wkidug_7n.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mvjm-6b1r"/><path class="hn820sblx"/><path class="wkidug_7n"/>`,
		"fallback": "energy-icons:mine-shaft-20-bold",
	});
}

export default Component;
