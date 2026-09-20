import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wlyd17xxc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wlyd17xxc"/>`,
		"fallback": "vaadin:margin-left",
	});
}

export default Component;
