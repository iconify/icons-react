import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/l/lxbmzzb1o.css';
import '../../css/q/q3bg5lk2i.css';
import '../../css/x/xf-67uxal.css';
import '../../css/d/d6gincb2u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="lxbmzzb1o"/><path class="q3bg5lk2i"/><path class="xf-67uxal"/><path class="d6gincb2u"/></g>`,
		"fallback": "circle-flags:pt-30",
	});
}

export default Component;
