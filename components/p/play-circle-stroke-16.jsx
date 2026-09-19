import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/upo67d98k.css';
import '../../css/i/ikh678xfg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="upo67d98k"/><path class="ikh678xfg"/>`,
		"fallback": "garden:play-circle-stroke-16",
	});
}

export default Component;
