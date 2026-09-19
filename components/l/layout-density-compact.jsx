import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pyie12b-i.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pyie12b-i"/>`,
		"fallback": "codicon:layout-density-compact",
	});
}

export default Component;
