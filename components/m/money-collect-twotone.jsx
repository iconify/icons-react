import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k92pv4boj.css';
import '../../css/s/s4zsohksa.css';
import '../../css/x/xc9f067ot.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k92pv4boj"/><path class="s4zsohksa"/><path class="xc9f067ot"/>`,
		"fallback": "ant-design:money-collect-twotone",
	});
}

export default Component;
