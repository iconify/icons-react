import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fjc8p761n.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fjc8p761n"/>`,
		"fallback": "garden:phone-call-transfer-only-stroke-16",
	});
}

export default Component;
