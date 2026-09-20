import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t4z7qo_ir.css';
import '../../css/a/aygw_60rm.css';
import '../../css/q/qy2alob5l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="t4z7qo_ir"/><path class="aygw_60rm"/><path clip-rule="evenodd" class="qy2alob5l"/>`,
		"fallback": "solar:rounded-magnifer-zoom-out-bold-duotone",
	});
}

export default Component;
