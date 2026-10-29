import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mzwk4_bwa.css';
import '../../css/o/otk4ldb_j.css';
import '../../css/c/c6fmg3u9f.css';
import '../../css/d/d9wk5wbku.css';
import '../../css/x/xq_3s94xd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mzwk4_bwa wm-k"/><path class="otk4ldb_j wm-k"/><path class="c6fmg3u9f wm-k"/><path class="d9wk5wbku wm-shine"/><path class="wm-a xq_3s94xd"/></g>`,
		"fallback": "withicons-anime:minus-circle",
	});
}

export default Component;
