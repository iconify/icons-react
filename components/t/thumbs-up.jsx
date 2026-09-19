import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yb5o5ib6c.css';
import '../../css/l/lnv-e_0ad.css';
import '../../css/t/txfzb7jvv.css';
import '../../css/r/r1_soeb4m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yb5o5ib6c"/><path class="lnv-e_0ad"/><path class="txfzb7jvv"/><path class="r1_soeb4m"/>`,
		"fallback": "famicons:thumbs-up",
	});
}

export default Component;
