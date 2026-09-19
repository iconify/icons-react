import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/c/cth2izb7y.css';
import '../../css/d/d2t-0cbdb.css';
import '../../css/x/xbm6mjgvm.css';
import '../../css/e/ewteercny.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="cth2izb7y"/><path class="d2t-0cbdb"/><path class="xbm6mjgvm"/><path class="ewteercny"/></g>`,
		"fallback": "circle-flags:mu",
	});
}

export default Component;
