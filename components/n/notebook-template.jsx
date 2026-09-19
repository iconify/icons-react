import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zrk_kpbxl.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zrk_kpbxl"/>`,
		"fallback": "codicon:notebook-template",
	});
}

export default Component;
