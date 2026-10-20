import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z0yys_sjp.css';
import '../../css/p/pkv646nkw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z0yys_sjp"/><path class="pkv646nkw"/>`,
		"fallback": "energy-icons:smartphone-vibrate-48",
	});
}

export default Component;
