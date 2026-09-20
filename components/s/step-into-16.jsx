import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e39j9zbpn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e39j9zbpn"/>`,
		"fallback": "qlementine-icons:step-into-16",
	});
}

export default Component;
