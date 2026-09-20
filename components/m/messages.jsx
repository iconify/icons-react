import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/yryg7ib-v.css';
import '../../css/b/bfn9owb0u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="yryg7ib-v"/><path class="bfn9owb0u"/></g>`,
		"fallback": "reicon:messages",
	});
}

export default Component;
