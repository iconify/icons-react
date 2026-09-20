import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cwz563b2r.css';
import '../../css/e/e_3s_pztg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cwz563b2r"/><path class="e_3s_pztg"/>`,
		"fallback": "streamline-pixel:interface-essential-alert-circle-1",
	});
}

export default Component;
