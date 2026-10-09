import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ljgv6abmg.css';
import '../../css/x/xhptmubfq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ljgv6abmg"/><path class="xhptmubfq"/>`,
		"fallback": "energy-icons:silo-20-bold",
	});
}

export default Component;
