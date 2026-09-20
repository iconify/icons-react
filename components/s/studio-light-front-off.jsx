import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ihnlsybak.css';
import '../../css/n/nncaqob0h.css';
import '../../css/s/sspjfbb1z.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ihnlsybak"/><path clip-rule="evenodd" class="nncaqob0h"/><path clip-rule="evenodd" class="sspjfbb1z"/><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-pencil:studio-light-front-off",
	});
}

export default Component;
