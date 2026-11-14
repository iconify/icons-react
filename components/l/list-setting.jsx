import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/x/xnnpc9b9v.css';
import '../../css/z/zleod-bqt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="xnnpc9b9v"/><path class="zleod-bqt"/></g>`,
		"fallback": "hugeicons:list-setting",
	});
}

export default Component;
