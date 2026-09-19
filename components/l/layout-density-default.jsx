import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/usud5lbtc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="usud5lbtc"/>`,
		"fallback": "codicon:layout-density-default",
	});
}

export default Component;
