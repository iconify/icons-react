import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uuxb0ab8w.css';
import '../../css/o/o96_dt2bo.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="uuxb0ab8w"/><path class="o96_dt2bo"/>`,
		"fallback": "garden:sun-fill-16",
	});
}

export default Component;
