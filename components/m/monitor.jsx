import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kt1r8gblm.css';
import '../../css/x/xw7rg0bvh.css';
import '../../css/y/yj9qhjbhp.css';
import '../../css/b/b-s_5jofa.css';
import '../../css/z/z5d075b0x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kt1r8gblm"/><path class="xw7rg0bvh"/><path class="yj9qhjbhp"/><path class="b-s_5jofa"/><path class="z5d075b0x"/></g>`,
		"fallback": "streamline-ultimate-color:monitor",
	});
}

export default Component;
