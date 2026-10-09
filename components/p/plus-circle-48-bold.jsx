import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n2neunb3u.css';
import '../../css/i/i66lmo-ym.css';
import '../../css/z/z_g0_6bob.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n2neunb3u"/><path class="i66lmo-ym"/><path class="z_g0_6bob"/>`,
		"fallback": "energy-icons:plus-circle-48-bold",
	});
}

export default Component;
