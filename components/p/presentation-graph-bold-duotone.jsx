import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xf377wm0d.css';
import '../../css/y/yxdjjhbix.css';
import '../../css/b/b5e6xqblm.css';
import '../../css/t/t6vjqsiao.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xf377wm0d"/><path class="yxdjjhbix"/><path class="b5e6xqblm"/><path class="t6vjqsiao"/>`,
		"fallback": "solar:presentation-graph-bold-duotone",
	});
}

export default Component;
