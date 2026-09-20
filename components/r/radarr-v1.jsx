import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jspcrab6z.css';
import '../../css/y/yvgtp5s0p.css';
import '../../css/a/am8x5_7hu.css';
import '../../css/t/t1i1reb0b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="jspcrab6z"/><path class="yvgtp5s0p"/><path class="am8x5_7hu"/><path class="t1i1reb0b"/>`,
		"fallback": "selfhst:radarr-v1",
	});
}

export default Component;
