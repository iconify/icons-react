import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/n/n46wi0c5u.css';
import '../../css/d/d-hyx6bgt.css';
import '../../css/p/p2z5jzwkd.css';
import '../../css/z/zuwye0jyw.css';
import '../../css/j/jcynq0brq.css';
import '../../css/n/nhict5b3l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="n46wi0c5u wm-deco"/><path class="d-hyx6bgt wm-deco"/><path class="p2z5jzwkd wm-k"/><path class="wm-a zuwye0jyw"/><path class="jcynq0brq wm-k"/><path class="nhict5b3l wm-a"/></g>`,
		"fallback": "withicons:reply-all-blueprint",
	});
}

export default Component;
