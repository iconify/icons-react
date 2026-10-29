import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ex_25ld0l.css';
import '../../css/f/fqsgzo2im.css';
import '../../css/c/ckd-9bcnj.css';
import '../../css/g/gtex2khak.css';
import '../../css/j/j0rd8vbpg.css';
import '../../css/r/rzfaljb6r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ex_25ld0l wm-k"/><path class="fqsgzo2im wm-k"/><path class="ckd-9bcnj wm-k"/><path class="gtex2khak wm-a"/><path class="j0rd8vbpg wm-a"/><path class="rzfaljb6r wm-a"/></g>`,
		"fallback": "withicons-anime:minimize-2",
	});
}

export default Component;
