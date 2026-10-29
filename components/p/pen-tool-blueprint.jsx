import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/l/la3wq9fod.css';
import '../../css/c/cocrkvbsc.css';
import '../../css/p/prjwt6bag.css';
import '../../css/q/qyldeu1it.css';
import '../../css/m/mmj9frbti.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="la3wq9fod wm-deco"/><path class="cocrkvbsc wm-deco"/><path class="prjwt6bag wm-deco"/><path class="qyldeu1it"/><path class="mmj9frbti"/></g>`,
		"fallback": "withicons:pen-tool-blueprint",
	});
}

export default Component;
