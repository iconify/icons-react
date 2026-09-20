import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/h/hn4fyjo5f.css';
import '../../css/z/zs7mmznsn.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="hn4fyjo5f"/><path class="zs7mmznsn"/></g>`,
		"fallback": "streamline-flex-color:location-pin-medical-hospital-2-flat",
	});
}

export default Component;
