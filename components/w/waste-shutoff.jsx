import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t96pnzc8w.css';
import '../../css/u/u_xjdzb_l.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t96pnzc8w"/><path class="u_xjdzb_l"/>`,
		"fallback": "temaki:waste-shutoff",
	});
}

export default Component;
