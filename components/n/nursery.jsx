import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/huszaob7x.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="huszaob7x"/>`,
		"fallback": "medical-icon:nursery",
	});
}

export default Component;
