import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/vog1d75un.css';
import '../../css/w/w3mm7eh0y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="vog1d75un"/><path class="w3mm7eh0y wm-a"/></g>`,
		"fallback": "withicons:qr-code-solid",
	});
}

export default Component;
