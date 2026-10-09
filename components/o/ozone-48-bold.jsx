import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wmfh5sz3m.css';
import '../../css/l/llzzeg-xn.css';
import '../../css/i/ixr-80b7p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wmfh5sz3m"/><path class="llzzeg-xn"/><path class="ixr-80b7p"/>`,
		"fallback": "energy-icons:ozone-48-bold",
	});
}

export default Component;
