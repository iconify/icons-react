import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/y/y7q4babzs.css';
import '../../css/e/etrpw0c8o.css';
import '../../css/a/a7hrivynf.css';
import '../../css/o/oex9pkfzv.css';
import '../../css/y/ybvynld-k.css';
import '../../css/q/qb1d7h5xf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="y7q4babzs"/><circle class="etrpw0c8o"/><circle class="a7hrivynf"/><circle class="oex9pkfzv"/><path class="ybvynld-k"/><path class="qb1d7h5xf"/></g>`,
		"fallback": "hugeicons:roller-skate",
	});
}

export default Component;
