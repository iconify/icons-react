import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/t/thfq4gbnm.css';
import '../../css/w/wd4pbac6a.css';
import '../../css/k/kubn6vbik.css';
import '../../css/y/ywpiuebfh.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g clip-rule="evenodd" class="d2kvgvbvc"><path class="thfq4gbnm"/><path class="wd4pbac6a"/><path class="kubn6vbik"/><path class="ywpiuebfh"/></g><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-pencil:sword-off",
	});
}

export default Component;
