import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xke0zjbte.css';
import '../../css/i/itxo1tb3o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xke0zjbte"/><path class="itxo1tb3o"/>`,
		"fallback": "token:pillar",
	});
}

export default Component;
