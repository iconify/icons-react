import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g15t1bclt.css';
import '../../css/j/j0qwephmf.css';
import '../../css/x/xpsm4tv3b.css';
import '../../css/z/zs5a_bbdq.css';
import '../../css/d/d5139_r8d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g15t1bclt"/><path class="j0qwephmf"/><path class="xpsm4tv3b"/><path class="zs5a_bbdq"/><path class="d5139_r8d"/>`,
		"fallback": "energy-icons:repowering-48-bold",
	});
}

export default Component;
