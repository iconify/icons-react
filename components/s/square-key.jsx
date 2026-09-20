import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/ypka-nb4x.css';
import '../../css/b/b1asx0uox.css';
import '../../css/s/st2vc_bfv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ypka-nb4x"/><path class="b1asx0uox"/><path class="st2vc_bfv"/></g>`,
		"fallback": "tabler:square-key",
	});
}

export default Component;
