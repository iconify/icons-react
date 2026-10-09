import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r8vrn9u6r.css';
import '../../css/m/m3htm8bpv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r8vrn9u6r"/><path class="m3htm8bpv"/>`,
		"fallback": "energy-icons:university-48",
	});
}

export default Component;
