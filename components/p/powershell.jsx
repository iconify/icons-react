import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xp7upebym.css';
import '../../css/k/kvn-2v0wt.css';
import '../../css/y/ybjqzoi9v.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xp7upebym"><path class="kvn-2v0wt"/><path class="ybjqzoi9v"/></g>`,
		"fallback": "catppuccin:powershell",
	});
}

export default Component;
