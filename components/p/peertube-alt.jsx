import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/km11tn.css';
import '../../css/y/ydovum.css';
import '../../css/j/jerajh.css';
import '../../css/b/bqezkf.css';
import '../../css/d/d-y0k17z.css';
import '../../css/d/d-eo5vsf.css';
import '../../css/d/d-hy4_ez.css';
import '../../css/d/d-zqf0qv.css';
import '../../css/d/d-h1s04y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="km11tn ydovum"/><path class="jerajh ydovum"/><path class="bqezkf ydovum"/>`,
		"fallback": "line-md:peertube-alt",
	});
}

export default Component;
