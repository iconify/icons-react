import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/f/f3x4wogjp.css';
import '../../css/x/x-_yk9bnc.css';
import '../../css/m/m1sjycc0z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="f3x4wogjp"/><path class="x-_yk9bnc"/><path class="m1sjycc0z"/></g>`,
		"fallback": "circle-flags:nr",
	});
}

export default Component;
