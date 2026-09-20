import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ruxg_8bkz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ruxg_8bkz"/>`,
		"fallback": "nimbus:redo",
	});
}

export default Component;
