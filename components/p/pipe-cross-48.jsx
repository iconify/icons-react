import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hpv7mcc4r.css';
import '../../css/m/m2v5ujr4v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hpv7mcc4r"/><path class="m2v5ujr4v"/>`,
		"fallback": "energy-icons:pipe-cross-48",
	});
}

export default Component;
