import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/l/l-abkm5vc.css';
import '../../css/l/lrpts-39x.css';
import '../../css/g/gzp-pnbii.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="l-abkm5vc"/><path class="lrpts-39x"/><path class="gzp-pnbii"/></g>`,
		"fallback": "withicons-bauhaus:microwave",
	});
}

export default Component;
