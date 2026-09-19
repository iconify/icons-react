import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/atfst2bbd.css';
import '../../css/x/xk80sybyi.css';
import '../../css/t/tc2fj349v.css';
import '../../css/v/velq4uheh.css';
import '../../css/g/gdgn-sbca.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="atfst2bbd"/><path class="xk80sybyi"/><path class="tc2fj349v"/><path class="velq4uheh"/><path class="gdgn-sbca"/>`,
		"fallback": "ant-design:pie-chart-twotone",
	});
}

export default Component;
