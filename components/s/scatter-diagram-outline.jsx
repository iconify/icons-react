import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gv7b53xgj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gv7b53xgj"/>`,
		"fallback": "lsicon:scatter-diagram-outline",
	});
}

export default Component;
