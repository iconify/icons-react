import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xbf_yzbjl.css';
import '../../css/p/p3f1qdw5i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xbf_yzbjl"/><path class="p3f1qdw5i"/>`,
		"fallback": "solar:pie-chart-2-bold",
	});
}

export default Component;
