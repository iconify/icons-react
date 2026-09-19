import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zl_cg_blc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zl_cg_blc"/>`,
		"fallback": "at-icons:mirror-horizontally",
	});
}

export default Component;
