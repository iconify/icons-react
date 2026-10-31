import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a4s_92bkg.css';
import '../../css/s/so7m0db_c.css';
import '../../css/t/thhtlebdq.css';
import '../../css/w/weiwl_b6p.css';
import '../../css/n/nhqdhzb4w.css';
import '../../css/i/impgp2bog.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="a4s_92bkg wm-k"/><path class="so7m0db_c wm-k"/><path class="thhtlebdq wm-k"/><path class="weiwl_b6p wm-shadow"/><path class="nhqdhzb4w wm-shine"/><path class="impgp2bog wm-shine"/></g>`,
		"fallback": "withicons-valentine:ticket",
	});
}

export default Component;
