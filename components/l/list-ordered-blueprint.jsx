import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/l/ljl4ldb7v.css';
import '../../css/l/l0e-lqbeo.css';
import '../../css/b/bry1z00iu.css';
import '../../css/a/a26dkbbht.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="ljl4ldb7v wm-deco"/><path class="l0e-lqbeo wm-k"/><path class="bry1z00iu wm-a"/><path class="a26dkbbht wm-k"/></g>`,
		"fallback": "withicons:list-ordered-blueprint",
	});
}

export default Component;
