import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nwwn-tela.css';

const viewBox = {"width":2304,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nwwn-tela"/>`,
		"fallback": "fa:mortar-board",
	});
}

export default Component;
