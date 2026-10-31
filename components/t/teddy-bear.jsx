import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/j/jp6whj95x.css';
import '../../css/u/u1k_8ubyh.css';
import '../../css/d/d0myv-6ew.css';
import '../../css/a/a-nnybcam.css';
import '../../css/b/byu6z3-9a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="jp6whj95x wm-shadow"/><path class="u1k_8ubyh wm-shadow"/><path class="d0myv-6ew"/><path class="a-nnybcam"/><path class="byu6z3-9a"/></g>`,
		"fallback": "withicons-brutal:teddy-bear",
	});
}

export default Component;
