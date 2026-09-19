import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dq3f4pbqc.css';
import '../../css/d/db3lwj71b.css';
import '../../css/y/yfqh42bcu.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dq3f4pbqc"/><path class="db3lwj71b"/><path class="yfqh42bcu"/>`,
		"fallback": "foundation:social-amazon",
	});
}

export default Component;
