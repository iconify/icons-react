import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jwgv0sqsx.css';
import '../../css/a/awp_-7bqo.css';
import '../../css/r/r-od25brh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jwgv0sqsx"/><circle transform="matrix(-1 0 0 1 40 24)" class="awp_-7bqo"/><path class="r-od25brh"/></g>`,
		"fallback": "icon-park-outline:left-branch",
	});
}

export default Component;
