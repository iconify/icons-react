import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/odjw9lbqc.css';
import '../../css/n/nn95hacfk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="odjw9lbqc"/><path class="nn95hacfk"/>`,
		"fallback": "vaadin:records",
	});
}

export default Component;
