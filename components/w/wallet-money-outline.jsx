import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/istl8mb1s.css';
import '../../css/o/oid5rccnd.css';
import '../../css/b/b3f_00ucw.css';
import '../../css/g/g4wbobeno.css';
import '../../css/q/qpw9ik4cj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="istl8mb1s"/><path class="oid5rccnd"/><path clip-rule="evenodd" class="b3f_00ucw"/><path class="g4wbobeno"/><path clip-rule="evenodd" class="qpw9ik4cj"/>`,
		"fallback": "solar:wallet-money-outline",
	});
}

export default Component;
