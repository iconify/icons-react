import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/x/xh7ixbc7w.css';
import '../../css/j/jjy93ib8m.css';
import '../../css/a/a0a4fku7h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="xh7ixbc7w"/><path class="jjy93ib8m"/><path class="a0a4fku7h"/></g>`,
		"fallback": "circle-flags:mq",
	});
}

export default Component;
