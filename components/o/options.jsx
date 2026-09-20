import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nme7svmcs.css';
import '../../css/f/fnrrisblx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nme7svmcs"/><path class="fnrrisblx"/>`,
		"fallback": "vaadin:options",
	});
}

export default Component;
