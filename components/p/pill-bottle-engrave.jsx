import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/w/wwrq7c6md.css';
import '../../css/l/lwxy9r3wm.css';
import '../../css/g/gn1b2waxk.css';
import '../../css/j/jgka1gbzk.css';
import '../../css/c/clvf63btf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wm-k wwrq7c6md"/><path class="lwxy9r3wm wm-a"/><path class="gn1b2waxk wm-shadow"/><path class="jgka1gbzk wm-k"/><path class="clvf63btf wm-a"/></g>`,
		"fallback": "withicons:pill-bottle-engrave",
	});
}

export default Component;
