import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/g/g_iyx94qa.css';
import '../../css/c/cxfb6ekyy.css';
import '../../css/h/h9qnghx7b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="g_iyx94qa"/><path class="cxfb6ekyy"/><path class="h9qnghx7b"/></g>`,
		"fallback": "circle-flags:it-77",
	});
}

export default Component;
