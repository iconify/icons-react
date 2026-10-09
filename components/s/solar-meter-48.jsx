import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lw53-sbdu.css';
import '../../css/b/b_6nlsbae.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lw53-sbdu"/><path class="b_6nlsbae"/>`,
		"fallback": "energy-icons:solar-meter-48",
	});
}

export default Component;
