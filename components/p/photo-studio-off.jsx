import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/k/ko4kphb8z.css';
import '../../css/z/z2i083byh.css';
import '../../css/a/a6wkvlbgd.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g clip-rule="evenodd" class="d2kvgvbvc"><path class="ko4kphb8z"/><path class="z2i083byh"/><path class="a6wkvlbgd"/></g><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-pencil:photo-studio-off",
	});
}

export default Component;
