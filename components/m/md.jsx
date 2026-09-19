import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/b/bcsuybb1d.css';
import '../../css/w/wtsoq_9ct.css';
import '../../css/q/q3bg5lk2i.css';
import '../../css/h/h6v7rrbmn.css';
import '../../css/u/u703wv94e.css';
import '../../css/w/w7fo9pkfe.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="bcsuybb1d"/><path class="wtsoq_9ct"/><path class="q3bg5lk2i"/><path class="h6v7rrbmn"/><path class="u703wv94e"/><path class="w7fo9pkfe"/></g>`,
		"fallback": "circle-flags:md",
	});
}

export default Component;
