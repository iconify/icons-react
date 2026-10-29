import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/k/k459aspxu.css';
import '../../css/t/t218te2ox.css';
import '../../css/s/s3z6ojk_r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="k459aspxu wm-deco"/><path class="t218te2ox wm-deco"/><path class="s3z6ojk_r"/></g>`,
		"fallback": "withicons:ring-box-blueprint",
	});
}

export default Component;
