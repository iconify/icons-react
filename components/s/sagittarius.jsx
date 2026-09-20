import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkm5kv_yd.css';
import '../../css/h/h_pt1abna.css';
import '../../css/e/egcw38bju.css';
import '../../css/e/e4zfowz9r.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dkm5kv_yd"/><path class="h_pt1abna"/><path class="egcw38bju"/><path class="e4zfowz9r"/>`,
		"fallback": "openmoji:sagittarius",
	});
}

export default Component;
