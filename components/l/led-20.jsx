import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e-73imbgo.css';
import '../../css/l/lyjggpv8v.css';
import '../../css/t/t-pv2thfp.css';
import '../../css/s/sr07ccc6h.css';
import '../../css/x/xf4bfabrv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e-73imbgo"/><path class="lyjggpv8v"/><path class="t-pv2thfp"/><path class="sr07ccc6h"/><path class="xf4bfabrv"/>`,
		"fallback": "energy-icons:led-20",
	});
}

export default Component;
