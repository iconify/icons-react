import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/ype9wcl-x.css';
import '../../css/p/pwrg7hbga.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ype9wcl-x"/><path class="pwrg7hbga"/></g>`,
		"fallback": "hugeicons:mail-edit-02",
	});
}

export default Component;
