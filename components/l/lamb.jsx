import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lq3gyotos.css';
import '../../css/v/vhfnlbb4f.css';
import '../../css/x/x87u6nj0f.css';
import '../../css/b/b_mdlt70l.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lq3gyotos"/><path class="vhfnlbb4f"/><path class="x87u6nj0f"/><path class="b_mdlt70l"/>`,
		"fallback": "iconito:lamb",
	});
}

export default Component;
