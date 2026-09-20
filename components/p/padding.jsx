import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bh09se2-w.css';
import '../../css/d/d-u2lgcch.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bh09se2-w"/><path class="d-u2lgcch"/>`,
		"fallback": "vaadin:padding",
	});
}

export default Component;
