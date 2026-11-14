import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/bs4vhc4kh.css';
import '../../css/l/l-p5y3b-f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="bs4vhc4kh"/><path class="l-p5y3b-f"/></g>`,
		"fallback": "hugeicons:message-unlock-02",
	});
}

export default Component;
