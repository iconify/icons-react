import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o60fd0ylo.css';
import '../../css/n/najn_bcni.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o60fd0ylo"/><path class="najn_bcni"/>`,
		"fallback": "energy-icons:seaweed-48",
	});
}

export default Component;
