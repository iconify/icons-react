import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/usg456b4d.css';
import '../../css/v/vamyx2ohg.css';
import '../../css/o/onqyswbdh.css';
import '../../css/b/b42uobcxl.css';
import '../../css/o/oh-xkt67m.css';
import '../../css/h/h3xfvwbbf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="usg456b4d wm-k"/><path class="vamyx2ohg wm-a"/><path class="onqyswbdh wm-shadow"/><path class="b42uobcxl wm-k"/><path class="oh-xkt67m wm-a"/><path class="h3xfvwbbf wm-a"/></g>`,
		"fallback": "withicons:list-tree-engrave",
	});
}

export default Component;
