import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qorl_g63f.css';
import '../../css/m/m2pt6cjck.css';
import '../../css/o/okdvo848h.css';
import '../../css/p/pycxazbfr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qorl_g63f"/><path class="m2pt6cjck"/><path class="okdvo848h"/><path class="pycxazbfr"/>`,
		"fallback": "energy-icons:offshore-hydrogen-20",
	});
}

export default Component;
