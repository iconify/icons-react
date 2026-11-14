import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/zii_9sq2c.css';
import '../../css/n/ni1-dcbmj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="zii_9sq2c"/><path class="ni1-dcbmj"/></g>`,
		"fallback": "hugeicons:message-done-02",
	});
}

export default Component;
