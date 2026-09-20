import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nfcq67o5j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nfcq67o5j"/>`,
		"fallback": "simple-icons:stripe",
	});
}

export default Component;
