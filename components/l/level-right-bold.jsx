import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gv_zncb2p.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gv_zncb2p"/>`,
		"fallback": "vaadin:level-right-bold",
	});
}

export default Component;
