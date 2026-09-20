import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/by00xob_x.css';
import '../../css/q/qhvaocbxk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="by00xob_x"/><path class="qhvaocbxk"/>`,
		"fallback": "selfhst:microsoft-onedrive-2018-light",
	});
}

export default Component;
