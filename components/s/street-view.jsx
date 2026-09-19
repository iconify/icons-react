import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lm24th03j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lm24th03j"/>`,
		"fallback": "fa-solid:street-view",
	});
}

export default Component;
