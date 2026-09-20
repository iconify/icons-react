import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ltf0sebud.css';
import '../../css/a/ahpr7q3lo.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ltf0sebud"/><path class="ahpr7q3lo"/>`,
		"fallback": "vaadin:pills",
	});
}

export default Component;
