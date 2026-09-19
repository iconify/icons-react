import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y79ngbc7v.css';
import '../../css/q/qxas1dhwz.css';
import '../../css/c/ckhj8wq2j.css';
import '../../css/u/ub88o8b7e.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y79ngbc7v"/><path class="qxas1dhwz"/><path class="ckhj8wq2j"/><path class="ub88o8b7e"/>`,
		"fallback": "ant-design:schedule-twotone",
	});
}

export default Component;
