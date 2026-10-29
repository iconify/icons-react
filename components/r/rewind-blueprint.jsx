import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/a/axyk3zbjv.css';
import '../../css/j/j44pl0bhc.css';
import '../../css/n/ng0mmonst.css';
import '../../css/n/naekklo4z.css';
import '../../css/z/zhqgc0bgt.css';
import '../../css/d/dzj8srq-y.css';
import '../../css/z/zi4dgsihc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="axyk3zbjv wm-deco"/><path class="j44pl0bhc wm-deco"/><path class="ng0mmonst wm-deco"/><path class="naekklo4z wm-k"/><path class="wm-a zhqgc0bgt"/><path class="dzj8srq-y wm-k"/><path class="wm-a zi4dgsihc"/></g>`,
		"fallback": "withicons:rewind-blueprint",
	});
}

export default Component;
