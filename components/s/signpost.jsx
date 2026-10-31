import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/v/vcs0b5r9t.css';
import '../../css/m/md929gfgs.css';
import '../../css/g/god379b7z.css';
import '../../css/p/p7uhglbvd.css';
import '../../css/e/e--mbmb3x.css';
import '../../css/c/c9e-62bmg.css';
import '../../css/y/ygk0rlhzc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="vcs0b5r9t"/><path class="md929gfgs"/><path class="god379b7z wm-shine"/><path class="p7uhglbvd wm-k"/><path class="e--mbmb3x wm-a"/><path class="c9e-62bmg"/><path class="ygk0rlhzc"/></g>`,
		"fallback": "withicons-kawaii:signpost",
	});
}

export default Component;
