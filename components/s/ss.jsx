import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/q/quzm9aczy.css';
import '../../css/g/gso7xxbqa.css';
import '../../css/o/o7r7blqjh.css';
import '../../css/t/tdszj-b2p.css';
import '../../css/m/m0fg2bb7t.css';
import '../../css/c/c3v99ollt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="quzm9aczy"/><path class="gso7xxbqa"/><path class="o7r7blqjh"/><path class="tdszj-b2p"/><path class="m0fg2bb7t"/><path class="c3v99ollt"/></g>`,
		"fallback": "circle-flags:ss",
	});
}

export default Component;
