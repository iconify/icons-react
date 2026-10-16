import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tdn7143ls.css';
import '../../css/k/kr6gu5bwb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tdn7143ls"/><path class="kr6gu5bwb"/>`,
		"fallback": "energy-icons:semi-detached-48-bold",
	});
}

export default Component;
