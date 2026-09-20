import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/t/t6a4tpbqc.css';
import '../../css/i/ij7j57b7c.css';
import '../../css/x/xsjxoiu5f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="t6a4tpbqc"/><path class="ij7j57b7c"/><path class="xsjxoiu5f"/></g>`,
		"fallback": "streamline-sharp-color:polaroid-flat",
	});
}

export default Component;
