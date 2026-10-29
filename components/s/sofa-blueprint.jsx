import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/e/e-n-_9zfe.css';
import '../../css/n/np7z6635y.css';
import '../../css/g/g2xclxbug.css';
import '../../css/h/hvb6btprc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="e-n-_9zfe wm-deco"/><path class="np7z6635y wm-deco"/><path class="g2xclxbug wm-deco"/><path class="hvb6btprc"/></g>`,
		"fallback": "withicons:sofa-blueprint",
	});
}

export default Component;
