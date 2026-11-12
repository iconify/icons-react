import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jmpvnv02r.css';
import '../../css/s/sav6x4bmf.css';
import '../../css/g/g_gp7lgqe.css';
import '../../css/d/d20do-bxb.css';
import '../../css/i/ijshl6ulo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jmpvnv02r"/><linearGradient id="SVGeaivDdNK" x1="380.8" x2="279.1" y1="123.3" y2="231.4" gradientUnits="userSpaceOnUse"><stop offset=".176" class="sav6x4bmf"/><stop offset="1" class="g_gp7lgqe"/></linearGradient><path fill="url(#SVGeaivDdNK)" class="d20do-bxb"/><linearGradient id="SVGqo8kRbur" x1="265.9" x2="148" y1="243.3" y2="361.3" gradientUnits="userSpaceOnUse"><stop offset=".176" class="sav6x4bmf"/><stop offset="1" class="g_gp7lgqe"/></linearGradient><path fill="url(#SVGqo8kRbur)" class="ijshl6ulo"/>`,
		"fallback": "selfhst:jira",
	});
}

export default Component;
