import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l1ku6jbdn.css';
import '../../css/j/j18sckbld.css';
import '../../css/y/yqonk1mgh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="l1ku6jbdn"/><path class="j18sckbld"/><path class="yqonk1mgh"/>`,
		"fallback": "solar:slider-vertical-minimalistic-outline",
	});
}

export default Component;
