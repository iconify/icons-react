import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h2p1-rbnu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h2p1-rbnu"/>`,
		"fallback": "carbon:private-network",
	});
}

export default Component;
