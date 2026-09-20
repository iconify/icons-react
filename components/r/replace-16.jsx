import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/feoxutb2p.css';
import '../../css/c/ce2rhacdh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="feoxutb2p"/><path class="ce2rhacdh"/>`,
		"fallback": "qlementine-icons:replace-16",
	});
}

export default Component;
