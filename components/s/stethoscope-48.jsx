import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f0k1v4bte.css';
import '../../css/l/lwiyvud8h.css';
import '../../css/d/dv82jtb4c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f0k1v4bte"/><path class="lwiyvud8h"/><path class="dv82jtb4c"/>`,
		"fallback": "energy-icons:stethoscope-48",
	});
}

export default Component;
