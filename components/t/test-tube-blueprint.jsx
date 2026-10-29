import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/z/z8qchacao.css';
import '../../css/e/egr27nbzr.css';
import '../../css/x/x1_r36phd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="wm-deco z8qchacao"/><path class="egr27nbzr wm-k"/><path class="wm-a x1_r36phd"/></g>`,
		"fallback": "withicons:test-tube-blueprint",
	});
}

export default Component;
