import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t9zsb05rr.css';
import '../../css/u/uhw0itnqs.css';
import '../../css/l/lqw3dibwd.css';
import '../../css/c/cgwrs0t0q.css';
import '../../css/b/bq1r_sn0k.css';
import '../../css/a/aw3myyk_i.css';
import '../../css/n/nbv1w52xg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t9zsb05rr wm-shadow"/><path class="uhw0itnqs"/><path class="lqw3dibwd"/><path class="cgwrs0t0q"/><path class="bq1r_sn0k"/><path class="aw3myyk_i wm-shine"/><path class="nbv1w52xg"/>`,
		"fallback": "withicons-plush:minus",
	});
}

export default Component;
