import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/h_19n4r8a.css';
import '../../css/x/xib8rybep.css';
import '../../css/l/lgi1zefvt.css';
import '../../css/w/w1_e9pbju.css';
import '../../css/x/xrgx2dblx.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="h_19n4r8a"/><path class="xib8rybep"/><path class="lgi1zefvt"/><path class="w1_e9pbju"/><path class="xrgx2dblx"/></g>`,
		"fallback": "pepicons-pencil:sword-circle",
	});
}

export default Component;
