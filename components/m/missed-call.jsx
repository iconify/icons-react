import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/d/dpran62wa.css';
import '../../css/t/tetyenb5k.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="dpran62wa"/><path class="tetyenb5k"/></g>`,
		"fallback": "streamline-flex:missed-call",
	});
}

export default Component;
