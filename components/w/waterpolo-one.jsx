import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dd9ketbni.css';
import '../../css/x/x_k7kub2j.css';
import '../../css/u/ubr3rccgt.css';
import '../../css/t/tyocggbrc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dd9ketbni"/><path class="x_k7kub2j"/><path class="ubr3rccgt"/><path class="tyocggbrc"/></g>`,
		"fallback": "icon-park-outline:waterpolo-one",
	});
}

export default Component;
