import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pp7dtzbce.css';
import '../../css/e/eun1wlb2w.css';
import '../../css/e/e15-uu0qm.css';
import '../../css/p/pwulb-bev.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pp7dtzbce"/><path class="eun1wlb2w"/><path class="e15-uu0qm"/><path class="pwulb-bev"/>`,
		"fallback": "energy-icons:motorcycle-20-bold",
	});
}

export default Component;
