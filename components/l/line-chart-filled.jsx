import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/enbvy-b7i.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="enbvy-b7i"/>`,
		"fallback": "lsicon:line-chart-filled",
	});
}

export default Component;
