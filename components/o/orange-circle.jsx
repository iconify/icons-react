import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/numv4vb1m.css';
import '../../css/s/snpiwsb_l.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="numv4vb1m"/><circle class="snpiwsb_l"/>`,
		"fallback": "openmoji:orange-circle",
	});
}

export default Component;
