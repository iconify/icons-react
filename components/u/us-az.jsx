import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/w/w7mzmcwfz.css';
import '../../css/m/mf42w9b3n.css';
import '../../css/z/zx8xtccho.css';
import '../../css/s/s06r0_b1e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="w7mzmcwfz"/><path class="mf42w9b3n"/><path class="zx8xtccho"/><path class="s06r0_b1e"/></g>`,
		"fallback": "circle-flags:us-az",
	});
}

export default Component;
