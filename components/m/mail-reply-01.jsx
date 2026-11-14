import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/wo2mc-qtj.css';
import '../../css/e/eopj_5x7f.css';
import '../../css/p/pkxsu9bpr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="wo2mc-qtj"/><path class="eopj_5x7f"/><path class="pkxsu9bpr"/></g>`,
		"fallback": "hugeicons:mail-reply-01",
	});
}

export default Component;
