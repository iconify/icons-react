import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y6nu2bcpl.css';
import '../../css/t/ts55nda3f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y6nu2bcpl"/><path class="ts55nda3f"/>`,
		"fallback": "energy-icons:smartphone-48",
	});
}

export default Component;
