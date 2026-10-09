import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bohi61rzr.css';
import '../../css/v/v1gt_db3q.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bohi61rzr"/><path class="v1gt_db3q"/>`,
		"fallback": "energy-icons:torch-20-bold",
	});
}

export default Component;
