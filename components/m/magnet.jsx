import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/vm9vvbi6s.css';
import '../../css/o/ovj_ak_9d.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="vm9vvbi6s"/><path class="ovj_ak_9d"/></g>`,
		"fallback": "pepicons:magnet",
	});
}

export default Component;
