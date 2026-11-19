import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/tdgve6hdl.css';
import '../../css/r/rvxs6mbfh.css';
import '../../css/y/yxq0mnbta.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><rect class="tdgve6hdl"/><path class="rvxs6mbfh"/><path class="yxq0mnbta"/></g>`,
		"fallback": "evicons:scheduled-charging",
	});
}

export default Component;
