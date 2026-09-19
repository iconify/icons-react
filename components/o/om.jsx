import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/r/r9vm--b0n.css';
import '../../css/p/pjtu282jf.css';
import '../../css/i/ibp1hj90j.css';
import '../../css/g/gvuy0e83x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="r9vm--b0n"/><path class="pjtu282jf"/><path class="ibp1hj90j"/><path class="gvuy0e83x"/></g>`,
		"fallback": "circle-flags:om",
	});
}

export default Component;
