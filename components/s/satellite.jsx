import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/g/gmbflft4k.css';
import '../../css/f/f89k2z5wg.css';
import '../../css/j/j3ol6op_o.css';
import '../../css/z/zsyl3z0it.css';
import '../../css/y/yqv-yyj9h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="gmbflft4k wm-k"/><path class="f89k2z5wg wm-a"/><path class="j3ol6op_o"/><path class="zsyl3z0it"/><path class="wm-s yqv-yyj9h"/></g>`,
		"fallback": "withicons-bauhaus:satellite",
	});
}

export default Component;
