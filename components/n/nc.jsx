import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/y/ykdzreamh.css';
import '../../css/a/a-gvidzwq.css';
import '../../css/r/rje4agm5u.css';
import '../../css/j/jdkm7xbrx.css';
import '../../css/e/ekdzdgxhq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="ykdzreamh"/><path class="a-gvidzwq"/><path class="rje4agm5u"/><path class="jdkm7xbrx"/><path class="ekdzdgxhq"/></g>`,
		"fallback": "circle-flags:nc",
	});
}

export default Component;
