import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ds7-_hb4x.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ds7-_hb4x"/>`,
		"fallback": "codicon:skip",
	});
}

export default Component;
