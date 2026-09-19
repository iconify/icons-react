import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/prqx2yctb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="prqx2yctb"/>`,
		"fallback": "famicons:play-skip-forward",
	});
}

export default Component;
