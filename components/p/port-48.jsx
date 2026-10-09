import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/glg0ud-ue.css';
import '../../css/e/e4gy22yti.css';
import '../../css/o/oejtqxnux.css';
import '../../css/u/uge5j2d4p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="glg0ud-ue"/><path class="e4gy22yti"/><path class="oejtqxnux"/><path class="uge5j2d4p"/>`,
		"fallback": "energy-icons:port-48",
	});
}

export default Component;
