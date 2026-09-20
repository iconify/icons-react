import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/avsfpdb2a.css';
import '../../css/m/mf0zkj60a.css';
import '../../css/w/wghcmjn7g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="avsfpdb2a"/><path class="mf0zkj60a"/><path class="wghcmjn7g"/></g>`,
		"fallback": "keyline-icons:qr-code-duotone",
	});
}

export default Component;
