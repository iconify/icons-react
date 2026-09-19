import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ixx1zab_j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ixx1zab_j"/>`,
		"fallback": "famicons:log-out",
	});
}

export default Component;
