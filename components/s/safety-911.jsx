import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/yxnide8qa.css';
import '../../css/r/r6f13h30v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="yxnide8qa"/><path class="r6f13h30v"/></g>`,
		"fallback": "streamline-ultimate:safety-911",
	});
}

export default Component;
