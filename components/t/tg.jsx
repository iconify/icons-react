import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/d/d-dft4b1h.css';
import '../../css/q/q8x2ybboa.css';
import '../../css/z/zrvvw8jpb.css';
import '../../css/n/n9gdb4bkh.css';
import '../../css/c/c14s-7nfk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="d-dft4b1h"/><path class="q8x2ybboa"/><path class="zrvvw8jpb"/><path class="n9gdb4bkh"/><path class="c14s-7nfk"/></g>`,
		"fallback": "circle-flags:tg",
	});
}

export default Component;
