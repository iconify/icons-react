import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/luwgkacuh.css';
import '../../css/d/dtm6gbcnd.css';
import '../../css/f/fgc-j2bug.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="luwgkacuh"/><circle transform="rotate(-45 8.562 7.667)" class="dtm6gbcnd"/><path class="fgc-j2bug"/></g>`,
		"fallback": "proicons:tag-multiple-var",
	});
}

export default Component;
