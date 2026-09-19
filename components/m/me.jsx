import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/z/zds4z092f.css';
import '../../css/t/tsphmabow.css';
import '../../css/d/dr7owxbgw.css';
import '../../css/r/r19r8o3en.css';
import '../../css/d/dgv5akv2b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="zds4z092f"/><path class="tsphmabow"/><path class="dr7owxbgw"/><path class="r19r8o3en"/><path class="dgv5akv2b"/></g>`,
		"fallback": "circle-flags:me",
	});
}

export default Component;
