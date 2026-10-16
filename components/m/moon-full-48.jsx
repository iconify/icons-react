import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vu_zzgnel.css';
import '../../css/h/hqyn3psnn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vu_zzgnel"/><path class="hqyn3psnn"/>`,
		"fallback": "energy-icons:moon-full-48",
	});
}

export default Component;
