import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/unvktmb_f.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="unvktmb_f"/>`,
		"fallback": "lsicon:push-mgt-outline",
	});
}

export default Component;
