import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mcbnmxbuj.css';
import '../../css/r/rsf38h_ot.css';
import '../../css/g/gd4hxebuc.css';
import '../../css/i/isqiaxawv.css';
import '../../css/k/ksextccsb.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mcbnmxbuj"/><path class="rsf38h_ot"/><path class="gd4hxebuc"/><path class="isqiaxawv"/><path class="ksextccsb"/>`,
		"fallback": "openmoji:signpost",
	});
}

export default Component;
