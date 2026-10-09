import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qeucaqz1x.css';
import '../../css/d/dotuhdlvr.css';
import '../../css/p/p49jcubtj.css';
import '../../css/y/y714mktsz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qeucaqz1x"/><path class="dotuhdlvr"/><path class="p49jcubtj"/><path class="y714mktsz"/>`,
		"fallback": "energy-icons:peatland-48-bold",
	});
}

export default Component;
