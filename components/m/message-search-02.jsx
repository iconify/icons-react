import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/yl_77jb6w.css';
import '../../css/x/xmykfublx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="yl_77jb6w"/><path class="xmykfublx"/></g>`,
		"fallback": "hugeicons:message-search-02",
	});
}

export default Component;
