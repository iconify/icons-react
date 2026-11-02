import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ahih2qpzl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ahih2qpzl"/>`,
		"fallback": "mingcute:layout-panel-top-line",
	});
}

export default Component;
