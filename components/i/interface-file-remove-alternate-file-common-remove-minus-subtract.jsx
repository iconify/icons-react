import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/u/u6f4hm08g.css';
import '../../css/n/nufvd8nzo.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="u6f4hm08g"/><path class="nufvd8nzo"/></g>`,
		"fallback": "streamline:interface-file-remove-alternate-file-common-remove-minus-subtract",
	});
}

export default Component;
