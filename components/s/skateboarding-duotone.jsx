import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s1hme5bwb.css';
import '../../css/l/lm_nrwi7b.css';
import '../../css/b/b9a6538vj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="s1hme5bwb"/><path class="lm_nrwi7b"/><path class="b9a6538vj"/></g>`,
		"fallback": "reicon:skateboarding-duotone",
	});
}

export default Component;
