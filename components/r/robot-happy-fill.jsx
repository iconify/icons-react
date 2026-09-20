import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kkg_txz7n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kkg_txz7n"/>`,
		"fallback": "mage:robot-happy-fill",
	});
}

export default Component;
