import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/a/aafymk54s.css';
import '../../css/i/ixc5v1_hg.css';
import '../../css/p/p1-6n5bow.css';
import '../../css/q/qjrhhdc2q.css';
import '../../css/o/oeuhaobhk.css';
import '../../css/p/pch3fpa9k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="aafymk54s"/><path class="ixc5v1_hg"/><path class="p1-6n5bow"/><path class="qjrhhdc2q"/><path class="oeuhaobhk"/><path class="pch3fpa9k"/></g>`,
		"fallback": "circle-flags:rs",
	});
}

export default Component;
