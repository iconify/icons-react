import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gja2twb9p.css';
import '../../css/q/qwc-lyped.css';
import '../../css/s/s42la0b2p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle clip-rule="evenodd" transform="rotate(-13.286 255.94 255.868)" class="gja2twb9p"/><path clip-rule="evenodd" class="qwc-lyped"/><path clip-rule="evenodd" class="s42la0b2p"/>`,
		"fallback": "selfhst:nextcloud-light",
	});
}

export default Component;
