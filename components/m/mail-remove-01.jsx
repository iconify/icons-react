import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/wo2mc-qtj.css';
import '../../css/v/vuzvd5bwx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="wo2mc-qtj"/><path class="vuzvd5bwx"/></g>`,
		"fallback": "hugeicons:mail-remove-01",
	});
}

export default Component;
