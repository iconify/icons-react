import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/za0t5mbix.css';
import '../../css/k/kve0vpbry.css';
import '../../css/g/gely41auh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="za0t5mbix"/><path class="kve0vpbry"/><path class="gely41auh"/>`,
		"fallback": "energy-icons:op-amp-20-bold",
	});
}

export default Component;
