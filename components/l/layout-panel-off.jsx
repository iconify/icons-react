import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v1-a7t4hk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v1-a7t4hk"/>`,
		"fallback": "codicon:layout-panel-off",
	});
}

export default Component;
