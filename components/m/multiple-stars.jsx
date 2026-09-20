import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/u/uqf_-fqgb.css';
import '../../css/m/m2r624k3x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="uqf_-fqgb"/><path class="m2r624k3x"/></g>`,
		"fallback": "streamline-plump-color:multiple-stars",
	});
}

export default Component;
