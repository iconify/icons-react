import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gofrhbcai.css';
import '../../css/t/tpe_wnyve.css';
import '../../css/k/kr1msob9m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gofrhbcai"/><path class="tpe_wnyve"/><path class="kr1msob9m"/>`,
		"fallback": "energy-icons:megaphone-48",
	});
}

export default Component;
