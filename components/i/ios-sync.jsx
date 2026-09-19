import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/naq0tfbis.css';
import '../../css/p/pkado8zjo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="naq0tfbis"/><path class="pkado8zjo"/>`,
		"fallback": "ion:ios-sync",
	});
}

export default Component;
