import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mtxo2lbck.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mtxo2lbck"/>`,
		"fallback": "codicon:run-below",
	});
}

export default Component;
