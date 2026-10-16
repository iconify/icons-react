import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c876zybxx.css';
import '../../css/t/tp2ceobty.css';
import '../../css/h/h3cp2fcos.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c876zybxx"/><path class="tp2ceobty"/><path class="h3cp2fcos"/>`,
		"fallback": "energy-icons:recloser-48-bold",
	});
}

export default Component;
