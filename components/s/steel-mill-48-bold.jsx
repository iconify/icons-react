import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qcosn_gan.css';
import '../../css/p/pnxir5bod.css';
import '../../css/c/c20deubpf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qcosn_gan"/><path class="pnxir5bod"/><path class="c20deubpf"/>`,
		"fallback": "energy-icons:steel-mill-48-bold",
	});
}

export default Component;
