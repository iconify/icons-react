import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/giyy8bcal.css';
import '../../css/b/bjf-fl4_c.css';
import '../../css/s/snglt3lmz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="giyy8bcal"/><path clip-rule="evenodd" class="bjf-fl4_c"/><path class="snglt3lmz"/></g>`,
		"fallback": "thesvg:vertexai-google",
	});
}

export default Component;
