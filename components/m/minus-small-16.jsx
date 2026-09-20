import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sn-6ucc2n.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sn-6ucc2n"/>`,
		"fallback": "qlementine-icons:minus-small-16",
	});
}

export default Component;
