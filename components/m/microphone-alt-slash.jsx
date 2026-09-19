import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kb79k96ib.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kb79k96ib"/>`,
		"fallback": "fa-solid:microphone-alt-slash",
	});
}

export default Component;
