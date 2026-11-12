import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wmg31mbbr.css';
import '../../css/y/yq4ktg_2p.css';
import '../../css/q/qxwq8bcbf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wmg31mbbr"/><path class="yq4ktg_2p"/><path class="qxwq8bcbf"/>`,
		"fallback": "selfhst:ksuite-manager-light",
	});
}

export default Component;
