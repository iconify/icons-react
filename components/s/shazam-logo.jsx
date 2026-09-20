import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/x/x6wq2bcno.css';
import '../../css/l/loubjdbwx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="y9tr6bcfx"><path class="x6wq2bcno"/><path class="loubjdbwx"/></g>`,
		"fallback": "streamline-logos:shazam-logo",
	});
}

export default Component;
