import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zz6lu0z5m.css';
import '../../css/l/lfanpcblh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="zz6lu0z5m"/><path class="lfanpcblh"/>`,
		"fallback": "mingcute:loading-3-line",
	});
}

export default Component;
