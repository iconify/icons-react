import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e5uzaw6kb.css';
import '../../css/x/xpzro9uft.css';
import '../../css/g/gomzfyb9s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="e5uzaw6kb"/><path clip-rule="evenodd" class="xpzro9uft"/><path clip-rule="evenodd" class="gomzfyb9s"/></g>`,
		"fallback": "reicon:safe-duotone",
	});
}

export default Component;
