import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/najjj7l3e.css';
import '../../css/i/ih5nqwb3h.css';
import '../../css/y/yb4vsmbrg.css';
import '../../css/r/rkvyn3f3b.css';
import '../../css/z/zt6ugkboe.css';
import '../../css/j/jxgfvmbhx.css';
import '../../css/c/c_gtf3bvp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="najjj7l3e"/><path class="ih5nqwb3h"/><path class="yb4vsmbrg"/><path class="rkvyn3f3b"/><path class="zt6ugkboe"/><path class="jxgfvmbhx"/><path class="c_gtf3bvp"/>`,
		"fallback": "solar:planet-4-bold",
	});
}

export default Component;
