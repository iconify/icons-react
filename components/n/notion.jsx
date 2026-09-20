import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f3hjm2bvy.css';
import '../../css/x/xc618m98j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f3hjm2bvy"/><path class="xc618m98j"/>`,
		"fallback": "selfhst:notion",
	});
}

export default Component;
