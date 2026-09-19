import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kg4balcnr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kg4balcnr"/>`,
		"fallback": "icomoon-free:redo",
	});
}

export default Component;
