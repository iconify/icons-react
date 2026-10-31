import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qu7v447dn.css';
import '../../css/z/z_bt_qzld.css';
import '../../css/p/p8rdedbcb.css';
import '../../css/d/d5g4vpbtg.css';
import '../../css/z/zvwl3kbtm.css';
import '../../css/r/rgz5y2nes.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qu7v447dn"/><path class="z_bt_qzld"/><path class="p8rdedbcb"/><path class="d5g4vpbtg"/><path class="zvwl3kbtm"/><path class="rgz5y2nes"/>`,
		"fallback": "iconito:strawberry",
	});
}

export default Component;
