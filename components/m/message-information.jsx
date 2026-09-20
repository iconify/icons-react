import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/p/p1njaob-i.css';
import '../../css/u/ulke3igkc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="p1njaob-i"/><path class="ulke3igkc"/></g>`,
		"fallback": "mage:message-information",
	});
}

export default Component;
