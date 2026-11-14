import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/wo2mc-qtj.css';
import '../../css/q/qg0dh0bef.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="wo2mc-qtj"/><path class="qg0dh0bef"/></g>`,
		"fallback": "hugeicons:mail-edit-01",
	});
}

export default Component;
