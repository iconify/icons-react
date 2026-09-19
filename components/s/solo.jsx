import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ox56n9_ux.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ox56n9_ux"/>`,
		"fallback": "fad:solo",
	});
}

export default Component;
