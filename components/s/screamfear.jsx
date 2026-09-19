import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nkh622bdk.css';
import '../../css/d/dr_tp8gfx.css';
import '../../css/o/otxt9vb3m.css';
import '../../css/r/rlcpunbld.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nkh622bdk"/><path class="dr_tp8gfx"/><path class="otxt9vb3m"/><path class="rlcpunbld"/>`,
		"fallback": "fxemoji:screamfear",
	});
}

export default Component;
