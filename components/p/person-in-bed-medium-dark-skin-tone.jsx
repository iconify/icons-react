import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vd4naybzo.css';
import '../../css/x/xbgwg93cp.css';
import '../../css/u/up-1tpbfk.css';
import '../../css/c/c9-p-mnfz.css';
import '../../css/b/b7i2ypb6l.css';
import '../../css/d/dcwheib8u.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vd4naybzo"/><path class="xbgwg93cp"/><path class="up-1tpbfk"/><path class="c9-p-mnfz"/><path class="b7i2ypb6l"/><path class="dcwheib8u"/>`,
		"fallback": "openmoji:person-in-bed-medium-dark-skin-tone",
	});
}

export default Component;
