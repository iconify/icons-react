import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/zmxinbbaj.css';
import '../../css/m/mkvecdb1a.css';
import '../../css/z/z3176dbdw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="zmxinbbaj"/><path class="mkvecdb1a"/><path class="z3176dbdw"/></g>`,
		"fallback": "mynaui:refresh-alt",
	});
}

export default Component;
