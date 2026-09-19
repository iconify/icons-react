import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/z/zlnfr6ytt.css';
import '../../css/p/pv731rbcc.css';
import '../../css/s/sox0l5b9y.css';
import '../../css/d/drmdxqbbg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="zlnfr6ytt"/><path class="pv731rbcc"/><path class="sox0l5b9y"/><path class="drmdxqbbg"/></g>`,
		"fallback": "circle-flags:tz-zanzibar",
	});
}

export default Component;
