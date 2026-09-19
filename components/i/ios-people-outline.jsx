import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/boiwm4w4j.css';
import '../../css/t/tm6rd794g.css';
import '../../css/k/k3t8hmbrn.css';
import '../../css/n/nxn8obbav.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="boiwm4w4j"/><path class="tm6rd794g"/><path class="k3t8hmbrn"/><path class="nxn8obbav"/>`,
		"fallback": "ion:ios-people-outline",
	});
}

export default Component;
