import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kuxcp-t-s.css';
import '../../css/q/qhvaocbxk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kuxcp-t-s"/><path class="qhvaocbxk"/>`,
		"fallback": "selfhst:microsoft-onedrive-2018-light",
	});
}

export default Component;
