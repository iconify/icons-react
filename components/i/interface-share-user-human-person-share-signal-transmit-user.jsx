import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/r/ri0fz1-pk.css';
import '../../css/l/lgy77748a.css';
import '../../css/o/ohav4_1dd.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><circle class="ri0fz1-pk"/><path class="lgy77748a"/><path class="ohav4_1dd"/></g>`,
		"fallback": "streamline:interface-share-user-human-person-share-signal-transmit-user",
	});
}

export default Component;
