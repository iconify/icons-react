import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yuvdc2bma.css';
import '../../css/u/u04sb4b-v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yuvdc2bma"/><path class="u04sb4b-v"/>`,
		"fallback": "energy-icons:rego-certificate-48",
	});
}

export default Component;
