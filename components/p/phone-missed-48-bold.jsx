import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ny2audwvu.css';
import '../../css/l/lyhfxv6br.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ny2audwvu"/><path class="lyhfxv6br"/>`,
		"fallback": "energy-icons:phone-missed-48-bold",
	});
}

export default Component;
