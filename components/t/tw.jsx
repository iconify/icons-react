import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/u/u31wb71rv.css';
import '../../css/r/rcbe75bbh.css';
import '../../css/q/qroub-blo.css';
import '../../css/b/bayzl6b2g.css';
import '../../css/g/geldb3bcb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="u31wb71rv"/><path class="rcbe75bbh"/><path class="qroub-blo"/><circle class="bayzl6b2g"/><circle class="geldb3bcb"/></g>`,
		"fallback": "circle-flags:tw",
	});
}

export default Component;
