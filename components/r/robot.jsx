import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rwirw_v_c.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rwirw_v_c"/>`,
		"fallback": "codicon:robot",
	});
}

export default Component;
