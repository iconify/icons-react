import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/jji4t1bqq.css';
import '../../css/y/ykcdqgr6g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="jji4t1bqq"/><path class="ykcdqgr6g"/></g>`,
		"fallback": "streamline-ultimate:stamps-image",
	});
}

export default Component;
