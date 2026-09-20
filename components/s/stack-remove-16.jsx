import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ifoyfinjb.css';
import '../../css/p/pxi__8h-n.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ifoyfinjb"/><path clip-rule="evenodd" class="pxi__8h-n"/>`,
		"fallback": "octicon:stack-remove-16",
	});
}

export default Component;
