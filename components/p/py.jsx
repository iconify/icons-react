import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/q/qp5p3d7zu.css';
import '../../css/t/t3p_-vs5e.css';
import '../../css/v/v1agn4bgq.css';
import '../../css/r/rztyzltfa.css';
import '../../css/t/t-txvlbdj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="qp5p3d7zu"/><path class="t3p_-vs5e"/><path class="v1agn4bgq"/><path class="rztyzltfa"/><path class="t-txvlbdj"/></g>`,
		"fallback": "circle-flags:py",
	});
}

export default Component;
