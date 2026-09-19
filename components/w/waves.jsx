import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/g/gxson9i6w.css';
import '../../css/o/onj4yibdv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="gxson9i6w"/><path class="onj4yibdv"/></g>`,
		"fallback": "cryptocurrency-color:waves",
	});
}

export default Component;
