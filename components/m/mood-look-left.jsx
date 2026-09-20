import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nfba-8anb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nfba-8anb"/>`,
		"fallback": "tabler:mood-look-left",
	});
}

export default Component;
