import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yy3_swbuw.css';
import '../../css/q/q8bdfel-f.css';
import '../../css/u/uu30wbcov.css';
import '../../css/z/ze4ho7b7d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yy3_swbuw"/><path class="q8bdfel-f"/><path class="uu30wbcov"/><path class="ze4ho7b7d"/></g>`,
		"fallback": "streamline-kameleon-color:map",
	});
}

export default Component;
