import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dbz4gebdo.css';
import '../../css/a/ats_5vb3p.css';
import '../../css/m/m8plgtpzf.css';
import '../../css/e/ee7zi1btq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dbz4gebdo"/><path class="ats_5vb3p"/><path class="m8plgtpzf"/><path class="ee7zi1btq"/>`,
		"fallback": "fxemoji:tigerside",
	});
}

export default Component;
