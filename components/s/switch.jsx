import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u3qcfitqq.css';

const viewBox = {"width":512,"height":456};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u3qcfitqq"/>`,
		"fallback": "ps:switch",
	});
}

export default Component;
