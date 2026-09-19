import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/i/ikip3ib8m.css';
import '../../css/e/ecctieb4n.css';
import '../../css/e/eoj1oxbzv.css';
import '../../css/e/edjlzkb1l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="ikip3ib8m"/><path class="ecctieb4n"/><path class="eoj1oxbzv"/><path class="edjlzkb1l"/></g>`,
		"fallback": "circle-flags:sn",
	});
}

export default Component;
