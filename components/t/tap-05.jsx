import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/nqjaw7bei.css';
import '../../css/e/e_yxgpbxq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="nqjaw7bei"/><path class="e_yxgpbxq"/></g>`,
		"fallback": "hugeicons:tap-05",
	});
}

export default Component;
