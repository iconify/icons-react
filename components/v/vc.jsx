import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/k/ksyn4cb8f.css';
import '../../css/q/qz9-edcvr.css';
import '../../css/g/grssl4u2a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="ksyn4cb8f"/><path class="qz9-edcvr"/><path class="grssl4u2a"/></g>`,
		"fallback": "circle-flags:vc",
	});
}

export default Component;
