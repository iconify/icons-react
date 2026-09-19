import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k9xelbb4d.css';
import '../../css/y/yv_brepse.css';
import '../../css/l/lpz0abbod.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k9xelbb4d"/><path class="yv_brepse"/><path class="lpz0abbod"/>`,
		"fallback": "ant-design:right-circle-twotone",
	});
}

export default Component;
