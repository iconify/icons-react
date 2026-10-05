import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/y/y0u5h-ixe.css';
import '../../css/i/i5a97tmxf.css';
import '../../css/v/vfn1hrbsx.css';
import '../../css/m/m551lgy7l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="y0u5h-ixe"/><path class="i5a97tmxf"/><path class="vfn1hrbsx"/><path class="m551lgy7l"/></g>`,
		"fallback": "matita:refresh-cw",
	});
}

export default Component;
