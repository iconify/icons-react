import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/ahwfs1brb.css';
import '../../css/i/ixuensbem.css';
import '../../css/t/t964pl-hf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ahwfs1brb"/><path class="ixuensbem"/><path class="t964pl-hf"/></g>`,
		"fallback": "keyline-icons:route-off-two-tone",
	});
}

export default Component;
