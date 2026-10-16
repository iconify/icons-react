import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o7dup-bsh.css';
import '../../css/m/mupntswkv.css';
import '../../css/c/cppppzbrr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o7dup-bsh"/><path class="mupntswkv"/><path class="cppppzbrr"/>`,
		"fallback": "energy-icons:sun-angle-48-bold",
	});
}

export default Component;
