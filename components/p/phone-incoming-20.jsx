import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f2m65bbab.css';
import '../../css/g/gcpnklyer.css';
import '../../css/k/kqncv3w7c.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f2m65bbab"/><path class="gcpnklyer"/><path class="kqncv3w7c"/>`,
		"fallback": "energy-icons:phone-incoming-20",
	});
}

export default Component;
