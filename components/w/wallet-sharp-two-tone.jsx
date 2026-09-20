import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/v/v0vut1rsh.css';
import '../../css/b/bual0lami.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="v0vut1rsh"/><path class="bual0lami"/></g>`,
		"fallback": "keyline-icons:wallet-sharp-two-tone",
	});
}

export default Component;
