import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yj-n85ffv.css';
import '../../css/e/ezfucsc-y.css';
import '../../css/t/tyel4j_my.css';
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
		"content": `<path class="yj-n85ffv"/><path class="ezfucsc-y"/><path class="tyel4j_my"/><path class="vh-i6ibxx"/><path class="tdyewcc-v"/><path class="mdbjzbadi"/><path class="gxsdwnt3y"/>`,
		"fallback": "openmoji:person-pouting",
	});
}

export default Component;
