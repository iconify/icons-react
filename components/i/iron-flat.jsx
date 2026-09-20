import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/h/htnqktrsj.css';
import '../../css/x/xbsov-i1f.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="htnqktrsj"/><path class="xbsov-i1f"/></g>`,
		"fallback": "streamline-color:iron-flat",
	});
}

export default Component;
