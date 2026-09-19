import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/f/fjgx-mnpn.css';
import '../../css/g/g9tmtd73z.css';
import '../../css/d/do593ubou.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="fjgx-mnpn"/><path class="g9tmtd73z"/><path class="do593ubou"/></g>`,
		"fallback": "flag:ml-4x3",
	});
}

export default Component;
