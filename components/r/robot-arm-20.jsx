import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hy2ju-cra.css';
import '../../css/l/lqfl87oqj.css';
import '../../css/s/swlc9x42h.css';
import '../../css/w/w5iv359ji.css';
import '../../css/m/mtv6tabvu.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hy2ju-cra"/><path class="lqfl87oqj"/><path class="swlc9x42h"/><path class="w5iv359ji"/><path class="mtv6tabvu"/>`,
		"fallback": "energy-icons:robot-arm-20",
	});
}

export default Component;
