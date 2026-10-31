import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/n/n5b6d7kkn.css';
import '../../css/x/x0u7kqb3z.css';
import '../../css/t/tkbq11xod.css';
import '../../css/z/zhncchbqm.css';
import '../../css/v/vbxqvybli.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="n5b6d7kkn wm-shadow"/><path class="x0u7kqb3z"/><path class="tkbq11xod"/><path class="zhncchbqm"/><path class="vbxqvybli"/></g>`,
		"fallback": "withicons-retro:pill",
	});
}

export default Component;
