import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o9c9tzeyd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o9c9tzeyd"/>`,
		"fallback": "codicon:layout-panel-left",
	});
}

export default Component;
