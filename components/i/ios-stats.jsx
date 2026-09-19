import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m9vabkbmi.css';
import '../../css/x/xqpsfqrcy.css';
import '../../css/t/t_ee__bsk.css';
import '../../css/l/lpbjt_eld.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m9vabkbmi"/><path class="xqpsfqrcy"/><path class="t_ee__bsk"/><path class="lpbjt_eld"/>`,
		"fallback": "ion:ios-stats",
	});
}

export default Component;
