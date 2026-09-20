import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/d/drn3kt_vz.css';
import '../../css/r/rbjgqx-hd.css';
import '../../css/u/uct6h-1kp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="drn3kt_vz"/><path class="rbjgqx-hd"/><path class="uct6h-1kp"/></g>`,
		"fallback": "streamline-freehand-color:kindle-read-document-hold",
	});
}

export default Component;
