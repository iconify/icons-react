import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s6rfx3q-n.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/kzjvy_biz.css';
import '../../css/a/at0ng4bzo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s6rfx3q-n secondary"/><g class="dt0cm9dhy primary"><path class="kzjvy_biz"/><path class="at0ng4bzo"/></g>`,
		"fallback": "iconaut:tv-duo",
	});
}

export default Component;
