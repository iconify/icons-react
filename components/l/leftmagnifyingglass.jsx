import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yru16-bfy.css';
import '../../css/e/euuh9f3mr.css';
import '../../css/j/jlo745u3w.css';
import '../../css/z/zum5gdayo.css';
import '../../css/n/nd86j5_sb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yru16-bfy"/><circle class="euuh9f3mr"/><path class="jlo745u3w"/><path class="zum5gdayo"/><path class="nd86j5_sb"/>`,
		"fallback": "fxemoji:leftmagnifyingglass",
	});
}

export default Component;
