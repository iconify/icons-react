import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ik8qzi1hh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ik8qzi1hh"/>`,
		"fallback": "streamline-plump:share-lock",
	});
}

export default Component;
