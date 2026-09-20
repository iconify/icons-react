import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/s/sd5_95y7u.css';
import '../../css/w/wqbd_ktkq.css';
import '../../css/s/svb95kb8y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="sd5_95y7u"/><path class="wqbd_ktkq"/><path class="svb95kb8y"/></g>`,
		"fallback": "streamline-freehand-color:tag-hot-price",
	});
}

export default Component;
