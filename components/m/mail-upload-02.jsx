import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/psy6-5bna.css';
import '../../css/x/xk75u8b-u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="psy6-5bna"/><path class="xk75u8b-u"/></g>`,
		"fallback": "hugeicons:mail-upload-02",
	});
}

export default Component;
