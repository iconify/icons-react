import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/udcbvob3v.css';
import '../../css/l/l_nfrbb_z.css';
import '../../css/r/r-n9oxbmb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="udcbvob3v"/><path class="l_nfrbb_z"/><path class="r-n9oxbmb"/>`,
		"fallback": "ion:ios-baseball",
	});
}

export default Component;
