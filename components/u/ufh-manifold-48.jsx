import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k0jwcy6ix.css';
import '../../css/x/xwae3tb6y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k0jwcy6ix"/><path class="xwae3tb6y"/>`,
		"fallback": "energy-icons:ufh-manifold-48",
	});
}

export default Component;
