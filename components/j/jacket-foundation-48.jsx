import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p5uynck5s.css';
import '../../css/t/tta6sqfmp.css';
import '../../css/k/k-o35zuxu.css';
import '../../css/r/rj1l-gbge.css';
import '../../css/d/dgqr9i00y.css';
import '../../css/d/du9ltqnim.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p5uynck5s"/><path class="tta6sqfmp"/><path class="k-o35zuxu"/><path class="rj1l-gbge"/><path class="dgqr9i00y"/><path class="du9ltqnim"/>`,
		"fallback": "energy-icons:jacket-foundation-48",
	});
}

export default Component;
