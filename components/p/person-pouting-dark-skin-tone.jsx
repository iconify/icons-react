import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yj-n85ffv.css';
import '../../css/f/f1grwwboh.css';
import '../../css/j/jfwyiac7q.css';
import '../../css/v/vh-i6ibxx.css';
import '../../css/t/tdyewcc-v.css';
import '../../css/m/mdbjzbadi.css';
import '../../css/g/gxsdwnt3y.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yj-n85ffv"/><path class="f1grwwboh"/><path class="jfwyiac7q"/><path class="vh-i6ibxx"/><path class="tdyewcc-v"/><path class="mdbjzbadi"/><path class="gxsdwnt3y"/>`,
		"fallback": "openmoji:person-pouting-dark-skin-tone",
	});
}

export default Component;
