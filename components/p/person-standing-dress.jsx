import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zg_qm-3fy.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zg_qm-3fy"/>`,
		"fallback": "bi:person-standing-dress",
	});
}

export default Component;
