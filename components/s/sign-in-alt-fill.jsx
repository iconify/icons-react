import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tpanu3zmm.css';
import '../../css/m/mqcc82bag.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tpanu3zmm"/><path class="mqcc82bag"/>`,
		"fallback": "si:sign-in-alt-fill",
	});
}

export default Component;
