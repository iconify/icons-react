import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yaa9r6mvo.css';
import '../../css/w/w0poz4bns.css';
import '../../css/j/jwu0w_2rv.css';
import '../../css/x/xak2o0bmu.css';
import '../../css/k/k6sa60boh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yaa9r6mvo"/><path class="w0poz4bns"/><path class="jwu0w_2rv"/><path class="xak2o0bmu"/><path class="k6sa60boh"/>`,
		"fallback": "energy-icons:monitor-x-20-bold",
	});
}

export default Component;
