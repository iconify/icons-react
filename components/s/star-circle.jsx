import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p-wgyugil.css';
import '../../css/b/bwibdw4bb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p-wgyugil"/><path class="bwibdw4bb"/>`,
		"fallback": "boxicons:star-circle",
	});
}

export default Component;
