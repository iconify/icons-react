import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pqd3mo5rx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pqd3mo5rx"/>`,
		"fallback": "codicon:type-hierarchy-sub",
	});
}

export default Component;
