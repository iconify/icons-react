import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/z/zglx_qqwa.css';
import '../../css/g/gy5jlacen.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="zglx_qqwa"/><path class="gy5jlacen"/></g>`,
		"fallback": "streamline-color:tidal-wave-flat",
	});
}

export default Component;
