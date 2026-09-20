import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pv9g8mm1j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pv9g8mm1j"/>`,
		"fallback": "tabler:navigation-check",
	});
}

export default Component;
