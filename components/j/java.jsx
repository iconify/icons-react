import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p9wzlccqg.css';
import '../../css/o/oa7pg3bad.css';
import '../../css/l/luya6x6cn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p9wzlccqg"/><path class="oa7pg3bad"/><path class="luya6x6cn"/>`,
		"fallback": "bxl:java",
	});
}

export default Component;
