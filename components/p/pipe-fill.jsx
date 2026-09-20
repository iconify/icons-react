import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dlcn_2b3l.css';
import '../../css/f/f7l70zbdi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dlcn_2b3l"/><path class="f7l70zbdi"/>`,
		"fallback": "lets-icons:pipe-fill",
	});
}

export default Component;
