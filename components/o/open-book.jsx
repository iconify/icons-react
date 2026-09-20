import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ndf6uogjk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ndf6uogjk"/>`,
		"fallback": "vaadin:open-book",
	});
}

export default Component;
